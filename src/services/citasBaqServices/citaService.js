import { citaModel } from "@/models/citasBaqModel/citaModels";
import crypto from "node:crypto";

export const CitaService = {
    listarCitas: async () => {
        return await citaModel.getAll()
    },

    agendarCita: async (data) => {
        const { fecha, horab, tipoBaq, telefono, nombre, apellido } = data;

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

        // Validamos el sobrecupo (Ahora con lógica dinámica de sábado)
        const overturn = await CitaService.verificarSobrecupo(fecha, horab);

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

        if (weekday === 7) {
            unavailable = true;
        }

        if (unavailable) {
            throw new Error("SCHEDULE_UNAVAILABLE");
        }

        //Preparar y Guardar
        const nuevaCita = {
            _id: crypto.randomUUID(),
            nombre: nombreCompleto,
            fecha,
            horab,
            tipoBaq,
            telefono
        }

        return await citaModel.create(nuevaCita)
    },

    buscarPorFecha: async (fecha) => {
        return await citaModel.getByDate(fecha);
    },

    verificarSobrecupo: async (fecha, horab) => {
        if (!fecha || !horab) {
            throw new Error("MISSING_DATA");
        }

        // Obtenemos las citas existentes en ese bloque
        const citasExistentes = await citaModel.getByDateAndSlot(fecha, horab);

        // --- CORRECCIÓN AQUÍ: Detectar día para cambiar el límite ---
        const [year, month, day] = fecha.split("-").map(Number);
        const dateObj = new Date(year, month - 1, day);
        const dayOfWeek = dateObj.getDay(); // 6 es Sábado

        let limite = 2; // Límite normal
        if (dayOfWeek === 6) {
            limite = 2; // Límite sábados
        }

        // Aplicamos la regla dinámica
        const esSobrecupo = citasExistentes.length >= limite;

        return esSobrecupo;
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

    obtenerDisponibilidad: async (fecha, tipoBaq) => {
        //Diccionario de horas
        const allHours = [
            700800, 800840, 840920, 9201000, 10001040, 10401120, 11201200,
            12001240, 14001440, 14401520, 15201600, 16001640, 16401720,
            17201800, 18001840, 18401920
        ];

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
            console.log("-> Entró en lógica de Sábado"); // LOG
            return allHours
        }

        try {
            //Obtener de la base de datos lo que ya está ocupado
            const ocupacion = await citaModel.getOccupiedSlots(fecha)
            console.log("3. Ocupación DB:", ocupacion); // LOG

            // --- CORRECCIÓN AQUÍ: Límite visual dinámico ---
            let limite = 2;
            if (dayOfWeek === 6) {
                limite = 2; // Si es sábado, bloqueamos visualmente al llegar a 2
            }

            //Recorremos
            ocupacion.forEach(slot => {
                if (slot.total >= limite) {
                    blockedHours.push(slot.horab)
                }
            });

        } catch (error) {
            
        }

        console.log("4. FINAL BLOCKED:", blockedHours); // LOG
        return [...new Set(blockedHours)]
    }
}
