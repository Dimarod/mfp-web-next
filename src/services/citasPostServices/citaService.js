import { citaModel } from "@/models/citasPostModel/citaModel";
import crypto from "node:crypto";

export const CitaService = {
    listarCitas: async () => {
        return await citaModel.getAll()
    },

    agendarCita: async (data) => {
        const { fecha, horapc, tipoPostCorp, telefono, nombre, apellido } = data;

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

        //Verificar sobrecupo especializado



        //2. Validaciones de fecha
        const [year, month, day] = fecha.split("-").map(Number)
        const citaDate = new Date(year, month - 1, day);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        //No agendar en fechas pasadas
        if (citaDate <= today) {
            throw new Error("DATE_PAST_OR_TODAY");
        }

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (citaDate.getTime() === tomorrow.getTime()) {
            if (now.getHours() >= 19) {
                throw new Error("DATE_PAST_OR_TODAY")
            }
        }

        const weekday = citaDate.getUTCDay() + 1;

        //Validaciones de horarios
        let unavailable = false;

        if (weekday === 1) {
            if (tipoPostCorp !== "Post") {
                unavailable = true;
            } else {
                if (horapc >= "9001000" && horapc <= "12001300") {

                }
            }
        }

        if (unavailable) {
            throw new Error("SCHEDULE_UNAVAILABLE");
        }

        await CitaService.validarReglasSobrecupo(citaDate, horapc, tipoPostCorp, fecha);

        //Preparar y Guardar
        const nuevaCita = {
            _id: crypto.randomUUID(),
            nombre: nombreCompleto,
            fecha,
            horapc,
            tipoPostCorp,
            telefono
        }

        return await citaModel.create(nuevaCita)
    },

    buscarPorFecha: async (fecha) => {
        if (!fecha) {
            throw new Error("DATE_NOT_PROVIDED");
        }

        return await citaModel.getByDate(fecha);
    },
    verificarSobrecupo: async (fecha, horapc) => {
        if (!fecha || !horapc) {
            throw new Error("MISSING_DATA");
        }

        //Obtenemos las citas existentes en ese bloque
        const citasExistentes = await citaModel.getByDateAndSlot(fecha, horapc);

        //Aplicamos la regla ¿Son 4 o más?
        const esSobrecupo = citasExistentes.length >= 4;

        return esSobrecupo
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
    validarReglasSobrecupo: async (citaDate, horapc, tipoPostCorp, fechaString) => {
        const diaDeSemana = citaDate.getDay();
        console.log(diaDeSemana);
        console.log(horapc);


        let limiteCupo = 1;
        let horarioValido = false;

        if (diaDeSemana === 0) {
            if (tipoPostCorp === "Post") throw new Error("SCHEDULE_UNAVAILABLE");
            if (horapc >= 9001000 && horapc <= 12001300) horarioValido = true;

            limiteCupo = 1;
        } else if (diaDeSemana === 6) {
            if (tipoPostCorp !== "Post") throw new Error('SCHEDULE_UNAVAILABLE');
            if (horapc >= 800900 && horapc <= 11001200) horarioValido = true;

            limiteCupo = 4;


        } else {
            horarioValido = true;

            if (tipoPostCorp === "Post" || tipoPostCorp === "Postmoldeo") {
                limiteCupo = 4;
            } else {
                limiteCupo = 1;
            }
        }

        if (!horarioValido) {
            throw new Error("SCHEDULE_UNAVAILABLE");
        }

        const cantidadCitas = await citaModel.countByType(fechaString, horapc, tipoPostCorp);

        if (cantidadCitas >= limiteCupo) {
            throw new Error("OVERBOOKING");
        }
    },
    obtenerDisponibilidad: async (fecha, tipoPostCorp) => {
        //Diccionario de horas
        const allHours = [
            800900, 9001000, 10001100, 11001200, 14001500, 15001600, 16001700,
            17001800, 18001900
        ];

        let blockedHours = [];

        console.log("--- DEBUG DISPONIBILIDAD ---");
        console.log("1. Fecha recibida:", fecha);

        //Analizar la fecha
        const [year, month, day] = fecha.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);
        const dayOfWeek = dateObj.getDay() //0=Dom 6=Sab

        console.log("2. Día detectado (0=Dom, 6=Sab):", dayOfWeek);

        //Días y horarios fijos
        if (dayOfWeek === 0) {
            if (tipoPostCorp !== "Post") {
                blockedHours.push(...allHours);
            } else {
                const noPermitidos = [14001500, 15001600, 16001700, 17001800, 18001900];
                blockedHours = allHours.filter(h => !noPermitidos.includes(h));
            }
        } else if ([1, 3, 5].includes(dayOfWeek)) {
            console.log("-> Entró en Lunes/Miercoles/Viernes"); // LOG
            blockedHours.push(14001440, 14401520)
        } else {
            blockedHours.push(12001240);
        }

        try {
            //Obtener de la base de datos lo que ya está ocupado
            const ocupacion = await citaModel.getOccupiedSlots(fecha)

            const mapaHoras = {};

            ocupacion.forEach(fila => {
                const hora = fila.horapc;
                const tipo = fila.tipoPostCorp;
                const cantidad = fila.total;

                if (!mapaHoras[hora]) {
                    mapaHoras[hora] = { totalGeneral: 0 }
                }

                //Sumamos el total de las horas
                mapaHoras[hora].totalGeneral += cantidad;
                //Guardamos cuantos hay de un tipo específico
                mapaHoras[hora][tipo] = cantidad;
            });

            //Evaluamos cada hora posible según la regla
            allHours.forEach(hora => {
                const datosHora = mapaHoras[hora] || { totalGeneral: 0 }


                //Regla 1: Están llenos los 4 cupos
                if (datosHora.totalGeneral >= 4) {
                    blockedHours.push(hora)
                    return;
                }

                //Regla 2: Lógica específica según lo que el usuario quiere agendar
                const esTipoMasivo = (tipoPostCorp === "Post" || tipoPostCorp === "Postmoldeo");

                if (esTipoMasivo) {

                } else {
                    const cantidadDeMiTipo = datosHora[tipoPostCorp] || 0;

                    if (cantidadDeMiTipo >= 1) {
                        blockedHours.push(hora)
                    }
                }

            })

        } catch (error) {

        }

        console.log("4. FINAL BLOCKED:", blockedHours); // LOG
        return [...new Set(blockedHours)]
    }
}