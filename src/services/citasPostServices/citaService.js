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
        const colombiaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Bogota"}));
        const today = new Date(colombiaTime.getFullYear(), colombiaTime.getMonth(), colombiaTime.getDate());

        // No agendar en fechas pasadas
        if (citaDate <= today) { // Ajustado a < para permitir agendar hoy si hay hueco
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
        // Eliminé el bloque "if (weekday === 1)" antiguo que tenía errores de strings.
        // Ahora todo pasa por la función experta:
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
        // Nota: Esta función verifica el límite genérico de 4. 
        // Para reglas específicas usamos validarReglasSobrecupo.
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
        if (diaDeSemana === 0) { // DOMINGO
            if (tipoPostCorp !== "Post") throw new Error("SCHEDULE_UNAVAILABLE");
            if (horapc >= 9001000 && horapc <= 12001300) horarioValido = true;
            limiteCupo = 1; // Solo 1 Post los domingos (o ajusta si son más)
            
        } else if (diaDeSemana === 6) { // SÁBADO
            if (tipoPostCorp !== "Post" && tipoPostCorp !== "Postmoldeo") throw new Error('SCHEDULE_UNAVAILABLE');
            if (horapc >= 800900 && horapc <= 11001200) horarioValido = true;
            
            // REGLA SÁBADO: Máximo 2 de cada tipo
            limiteCupo = 2; 

        } else if(diaDeSemana === 5 && horapc >= 11001200){
          throw new Error('SCHEDULE_UNAVAILABLE')
        }else { // LUNES A VIERNES
            horarioValido = true;
            if (tipoPostCorp === "Post" || tipoPostCorp === "Postmoldeo") {
                limiteCupo = 4;
            } else {
                limiteCupo = 1;
            }
        }

        if (!horarioValido) throw new Error("SCHEDULE_UNAVAILABLE");

        // 2. Verificar disponibilidad en Base de Datos
        
        // A) Verificamos el límite específico (Ej: que no haya más de 2 Posts el sábado)
        const cantidadDeMiTipo = await citaModel.countByType(fechaString, horapc, tipoPostCorp);
        if (cantidadDeMiTipo >= limiteCupo) {
            throw new Error("OVERBOOKING");
        }

        // B) SEGURIDAD EXTRA PARA SÁBADOS: 
        // Verificar que el TOTAL general no pase de 4 (Ej: 2 Post + 2 Postmoldeo = 4. No cabe nadie más)
        if (diaDeSemana === 6) {
             // Usamos una función que cuente todo en esa hora, o reutilizamos getOccupiedSlots
             // Para ser rápidos, podemos usar getByDateAndSlot que ya tienes
             const totalEnHora = await citaModel.getByDateAndSlot(fechaString, horapc);
             if (totalEnHora.length >= 4) {
                 throw new Error("OVERBOOKING");
             }
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
        const colombiaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Bogota"}));
        const today = new Date(colombiaTime.getFullYear(), colombiaTime.getMonth(), colombiaTime.getDate());

        if(dateObj.getTime() <= today.getTime()){
            return allHours;
        }

        // 1. Bloqueos Fijos por Día
        if (dayOfWeek === 0) { // Domingo
            if (tipoPostCorp !== "Post") {
                return allHours; // Todo bloqueado si no es Post
            } else {
                const noPermitidos = [14001500, 15001600, 16001700, 17001800, 18001900]; // Tarde bloqueada
                blockedHours.push(...noPermitidos);
            }
        } else if (dayOfWeek === 6) { // Sábado
            if (tipoPostCorp !== "Post" && tipoPostCorp !== "Postmoldeo") {
                return allHours; // Todo bloqueado si no es Post/Postmoldeo
            } else {
                // Bloqueamos la tarde
                const horasTarde = [14001500, 15001600, 16001700, 17001800, 18001900];
                blockedHours.push(...horasTarde);
            }
        }else if(dayOfWeek === 5){
          blockedHours.push(14001500, 15001600, 16001700, 17001800, 18001900);
        }

        // 2. Bloqueos Dinámicos (Base de Datos)
        try {
            const ocupacion = await citaModel.getOccupiedSlots(fecha);
            
            // Transformamos DB a Mapa: { "800900": { total: 3, Post: 2, Postmoldeo: 1 } }
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

                // LÓGICA DE SÁBADO (Tu lógica personalizada)
                if (dayOfWeek === 6) {
                    if (tipoPostCorp === "Post") {
                        // CORRECCIÓN: Usamos datosHora, no 'datos'
                        const cuantosPost = datosHora["Post"] || 0;
                        // Si ya hay 2 Post, no caben más Post (aunque haya espacio general)
                        if (cuantosPost >= 2) blockedHours.push(hora);
                    }
                    else if (tipoPostCorp === "Postmoldeo") {
                        const cuantosPostmoldeo = datosHora["Postmoldeo"] || 0;
                        // Si ya hay 2 Postmoldeo, no caben más
                        if (cuantosPostmoldeo >= 2) blockedHours.push(hora);
                    }
                } 
                // LÓGICA DE SEMANA (L-V)
                else {
                    const esTipoMasivo = (tipoPostCorp === "Post" || tipoPostCorp === "Postmoldeo");
                    if (!esTipoMasivo) {
                        // Si es tipo restringido (Valoración), solo 1 por hora
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
