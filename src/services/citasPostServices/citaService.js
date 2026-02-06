import { citaModel } from "@/models/citasPostModel/citaModel";
import crypto from "node:crypto";

export const CitaService = {
    listarCitas: async () => {
        return await citaModel.getAll()
    },

    agendarCita: async (data) => {
        const { fecha, horapc, tipoPostCorp, telefono, nombre, apellido } = data;

        // 1. Limpieza de datos
        const nombreCompleto = `${nombre.trim()} ${apellido.trim()}`;

        // Convertimos horapc a Número para evitar problemas de comparación
        const horaNumero = Number(horapc);

        // Validación duplicados
        const citasDelDia = await citaModel.getByDate(fecha);
        const citaExistente = citasDelDia.find(c => c.nombre === nombreCompleto);

        if (citaExistente) {
            throw new Error("ALREADY_BOOKED");
        }

        // 2. Validaciones de fecha
        const [year, month, day] = fecha.split("-").map(Number)
        const citaDate = new Date(year, month - 1, day);
        const now = new Date();
        const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));
        const today = new Date(colombiaTime.getFullYear(), colombiaTime.getMonth(), colombiaTime.getDate());

        // No agendar en fechas pasadas
        if (citaDate <= today) {
            throw new Error("DATE_PAST_OR_TODAY");
        }

        // Regla: No agendar para mañana después de las 7PM
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (citaDate.getTime() === tomorrow.getTime()) {
            if (colombiaTime.getHours() >= 19) {
                throw new Error("DATE_PAST_OR_TODAY");
            }
        }

        // --- VALIDACIONES DE REGLAS (Centralizadas) ---
        await CitaService.validarReglasSobrecupo(citaDate, horaNumero, tipoPostCorp, fecha);

        // Preparar y Guardar
        const nuevaCita = {
            _id: crypto.randomUUID(),
            nombre: nombreCompleto,
            fecha,
            horapc: horaNumero, // Guardamos como número
            tipoPostCorp,
            telefono
        }

        return await citaModel.create(nuevaCita)
    },

    buscarPorFecha: async (fecha) => {
        return await citaModel.getByDate(fecha);
    },

    verificarSobrecupo: async (fecha, horapc) => {
        if (!fecha || !horapc) throw new Error("MISSING_DATA");
        const citasExistentes = await citaModel.getByDateAndSlot(fecha, horapc);
        return citasExistentes.length >= 4;
    },

    eliminarCita: async (id) => {
        if (!id) throw new Error("ID_NOT_PROVIDED");
        const result = await citaModel.deleteById(id);
        if (result.affectedRows === 0) throw new Error("NOT_FOUND");
        return result;
    },

    // --- EL CEREBRO DE LAS VALIDACIONES (Backend) ---
    validarReglasSobrecupo: async (citaDate, horapc, tipoPostCorp, fechaString) => {
        const diaDeSemana = citaDate.getDay(); // 0=Dom, 6=Sab

        let limiteCupo = 1;
        let horarioValido = false;

        // 1. Validar Horarios y Tipos permitidos por día
        if (diaDeSemana === 0 || diaDeSemana === 6) {
            //Regla 1: Solo drenajes y postoperatorio
            if (tipoPostCorp !== "Drenajes" && tipoPostCorp !== "Preoperatorio") {
                throw new Error("SCHEDULE_UNAVAILABLE")
            }

            //Regla 2: Horarios permitidos
            if (diaDeSemana === 6) {
                if (horapc >= 800900 && horapc <= 11001200) horarioValido = true
            } else {
                if (horapc >= 9001000 && horapc <= 11001200) horarioValido = true
            }

            //Regla 3; Límites específicos
            if (tipoPostCorp === "Drenajes") {
                limiteCupo = 3
            } else {
                limiteCupo = 1
            }

        } else { // LUNES A VIERNES
            //Regla 1: Drenajes no permitidos entre semana
            if (tipoPostCorp === "Drenajes") {
                throw new Error("SCHEDULE_UNAVAILABLE")
            }
            horarioValido = true;
            if (tipoPostCorp === "Post" || tipoPostCorp === "Postmoldeo") {
                limiteCupo = 4;
            } else {
                limiteCupo = 1;
            }
        }

        if (!horarioValido) throw new Error("SCHEDULE_UNAVAILABLE");

        // 2. Verificar disponibilidad en Base de Datos

        // A) LÍMITE POR TIPO (Check Individual)
        // Max 3 Drenajes, Max 1 Preoperatorio
        const cantidadDeMiTipo = await citaModel.countByType(fechaString, horapc, tipoPostCorp);
        if (cantidadDeMiTipo >= limiteCupo) {
            throw new Error("OVERBOOKING");
        }

        // B) Límite Global (Max 4 personas por hora SIEMPRE)
        const totalEnHora = await citaModel.getByDateAndSlot(fechaString, horapc);
        if (totalEnHora.length >= 4) {
            throw new Error("OVERBOOKING");
        }
    },

    // --- EL CEREBRO DEL BLOQUEO VISUAL (Frontend) ---
    obtenerDisponibilidad: async (fecha, tipoPostCorp) => {
        const allHours = [
            800900, 9001000, 10001100, 11001200, 14001500, 15001600, 16001700,
            17001800, 18001900
        ];

        let blockedHours = [];

        // Analizar fecha
        const [year, month, day] = fecha.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);
        const dayOfWeek = dateObj.getDay();

        const now = new Date();
        const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));
        const today = new Date(colombiaTime.getFullYear(), colombiaTime.getMonth(), colombiaTime.getDate());

        if (dateObj.getTime() <= today.getTime()) {
            return allHours;
        }

        // 1. Bloqueos Fijos por Día
        if (dayOfWeek === 6 || dayOfWeek === 0) { // Sábado y Domingo
            //Si no es Drenaje o Preoperatorio bloquear todo el día
            if (tipoPostCorp !== "Drenajes" && tipoPostCorp !== "Preoperatorio") {
                return allHours;
            }

            if (dayOfWeek === 6) { //Sábado
                const horaTarde = [14001500, 15001600, 16001700,
                    17001800, 18001900]
                blockedHours.push(...horaTarde)
            } else { //Domingo
                const horaDomingo = [800900, 14001500, 15001600, 16001700,
                    17001800, 18001900]
                blockedHours.push(...horaDomingo)
            }
        }else{
            if(tipoPostCorp === "Drenajes"){
                return allHours;
            }
        }

        // 2. Bloqueos Dinámicos (Base de Datos)
        try {
            const ocupacion = await citaModel.getOccupiedSlots(fecha);

            const mapaHoras = {};

            ocupacion.forEach(fila => {
                const hora = fila.horapc;
                const tipo = fila.tipoPostCorp;
                const cantidad = fila.total;

                if (!mapaHoras[hora]) mapaHoras[hora] = { totalGeneral: 0 };

                mapaHoras[hora].totalGeneral += cantidad;
                mapaHoras[hora][tipo] = cantidad;
            });

            // Revisamos cada hora
            allHours.forEach(hora => {
                const datosHora = mapaHoras[hora] || { totalGeneral: 0 };

                // REGLA GLOBAL: Si ya hay 4 personas, nadie entra.
                if (datosHora.totalGeneral >= 4) {
                    blockedHours.push(hora);
                    return;
                }

                // LÓGICA DE SÁBADO
                if (dayOfWeek === 6 || dayOfWeek === 0) {
                    if (tipoPostCorp === "Drenajes") {
                        const cant = datosHora["Drenajes"] || 0;
                        if (cant >= 3) blockedHours.push(hora);
                    }
                    else if (tipoPostCorp === "Preoperatorio") {
                        const cant = datosHora["Preoperatorio"] || 0;
                        if (cant >= 2) blockedHours.push(hora);
                    }
                }
                // LÓGICA DE SEMANA (L-V)
                else {
                    const esTipoMasivo = (tipoPostCorp === "Post" || tipoPostCorp === "Postmoldeo");
                    if (!esTipoMasivo) {
                        const cantidadDeMiTipo = datosHora[tipoPostCorp] || 0;
                        if (cantidadDeMiTipo >= 1) blockedHours.push(hora);
                    }
                }
            });

        } catch (error) {
            console.error("Error calculando disponibilidad:", error);
        }

        return [...new Set(blockedHours)];
    }
}