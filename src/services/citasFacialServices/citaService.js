import { citaModel } from "@/models/citasFacialModel/citaModel";
import crypto from "node:crypto";

export const CitaService = {
    listarCitas: async () => {
        return await citaModel.getAll()
    },

    agendarCita: async (data) => {
        const { fecha, horaf, tipoFac, telefono, nombre, apellido } = data;

        //1. Limpieza de datos
        const nombreCompleto = `${nombre.trim()} ${apellido.trim()}`;

        const citasDelDia = await citaModel.getByDate(fecha);
        let citaExistente = false;

        for (let i = 0; i < citasDelDia.length; i++) {
            const cita = citasDelDia[i];
            if (cita.nombre === nombreCompleto) {
                citaExistente = true;
                break;
            }
        }

        if (citaExistente) {
            throw new Error("ALREADY_BOOKED");
        }

        const overturn = await CitaService.verificarSobrecupo(fecha, horaf, tipoFac);

        if (overturn) {
            throw new Error("OVERBOOKING");
        }

        //2. Validaciones de fecha
        const [year, month, day] = fecha.split("-").map(Number)
        const citaDate = new Date(year, month - 1, day);
        const now = new Date();
        const colombiaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Bogota"}));
        const today = new Date(colombiaTime.getFullYear(), colombiaTime.getMonth(), colombiaTime.getDate());

        //No agendar en fechas pasadas
        if (citaDate <= today) {
            throw new Error("DATE_PAST_OR_TODAY");
        }

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (citaDate.getTime() === tomorrow.getTime()) {
            if (colombiaTime.getHours() >= 19) {
                throw new Error("DATE_PAST_OR_TODAY")
            }
        }

        const weekday = citaDate.getUTCDay() + 1;

        //Validaciones de horarios
        let unavailable = false;

        if (weekday === 7 && tipoFac !== "Depilacion") {
            unavailable = true;
        } else if (weekday === 7 && tipoFac === "Depilacion") {
            if (horaf > "11001200") unavailable = true;
        }

        if (unavailable) {
            throw new Error("SCHEDULE_UNAVAILABLE");
        }

        //Preparar y Guardar
        const nuevaCita = {
            _id: crypto.randomUUID(),
            nombre: nombreCompleto,
            fecha,
            horaf,
            tipoFac,
            telefono
        }

        return await citaModel.create(nuevaCita)
    },

    buscarPorFecha: async (fecha) => {

        return await citaModel.getByDate(fecha);
    },
    verificarSobrecupo: async (fecha, horaf, tipoFac) => {
        if (!fecha || !horaf || !tipoFac) {
            throw new Error("MISSING_DATA");
        }

        //Obtenemos las citas existentes en ese bloque
        const citasExistentes = await citaModel.getByDateAndSlot(fecha, horaf);

        let tieneNormal = false
        let tienePeptidos = false

        citasExistentes.forEach(cita => {
          if(cita.tipoFac === "Peptidos"){
            tienePeptidos = true
          }else{
            tieneNormal = true
          }
        })

        //Aplicamos la regla ¿Son más de uno?
        if(tipoFac === "Peptidos"){
         return tienePeptidos
        }

       return tieneNormal
    },
    eliminarCita: async (id) => {
        if (!id) {
            throw new Error("ID_NOT_PROVIDED");
        }

        const result = await citaModel.deleteById(id);

        if (result.affectedRows === 0) {
            throw new Error("NOT_FOUND");
        }

        return result;
    },
    obtenerDisponibilidad: async (fecha, tipoFac) => {
        //Diccionario de horas
        const allHours = [
            9001000, 10001100, 11001200, 14001500, 15001600
        ];

        const validarPeptidos = await citaModel.get

        let blockedHours = [];

        console.log("--- DEBUG DISPONIBILIDAD ---");
        console.log("1. Fecha recibida:", fecha);

        //Analizar la fecha
        const [year, month, day] = fecha.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);
        const dayOfWeek = dateObj.getDay() //0=Dom 6=Sab

        const now = new Date();
        const colombiaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Bogota"}));
        const today = new Date(colombiaTime.getFullYear(), colombiaTime.getMonth(), colombiaTime.getDate());

        if(dateObj.getTime() <= today.getTime()){
            return allHours;
        }

        console.log("2. Día detectado (0=Dom, 6=Sab):", dayOfWeek);

        //Días y horarios fijos
        if (dayOfWeek === 6) {
            if (tipoFac !== "Depilacion") {
                blockedHours.push(...allHours)
            }else{
                const sabadoPermitido = [800900, 9001000, 10001100, 11001200];
                blockedHours = allHours.filter(h => !sabadoPermitido.includes(h));
            }
        }

        try {
            //Obtener de la base de datos lo que ya está ocupado
            const citasDelDia = await citaModel.getByDate(fecha)
            
            const ocupacionPorHora = {}

            citasDelDia.forEach(cita => {
             if(!ocupacionPorHora[cita.horaf]){
               ocupacionPorHora[cita.horaf] = {normal: 0, peptidos: 0}
             }
             if(cita.tipoFac === "Peptidos"){
               ocupacionPorHora[cita.horaf].peptidos +=1
             }else{
              ocupacionPorHora[cita.horaf].bormal +=1
             }
            })

            //Recorremos
            allHours.forEach(hora => {
              const ocupacion = ocupacionPorHora[hora]

              if(ocupacion){

                if(ocupacion.peptidos >= 1 && ocupacion.normal >=1){
                  blockedHours.push(hora)
                  return
                }
                if(tipoFac === "Peptidos"){
                  if(ocupacion.peptidos >= 1){
                    blockedHours.push(hora)
                  }
                }else if(tipoFac && tipoFac !== ""){
                 if(ocupacion.normal >= 1){
                  blockedHours.push(hora)
                 }
                }
              }
            })

        } catch (error) {

        }

        console.log("4. FINAL BLOCKED:", blockedHours); // LOG
        return [...new Set(blockedHours)]
    }
}
