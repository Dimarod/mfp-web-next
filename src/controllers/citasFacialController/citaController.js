import { CitaService } from "@/services/citasFacialServices/citaService";

export const citaController = {
  listar: async (req, res) => {
    try {
      let { fecha } = req.query;
      if (!fecha || fecha === undefined || fecha === "") {
        const now = new Date();

        fecha = now.toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });

        console.log("Buscando por defecto", fecha)
      } else {
        console.log("Buscando día específico");

      }

      const citas = await CitaService.buscarPorFecha(fecha);
      return res.status(200).json({ rows: citas });
    } catch (error) {
      res.status(500).json({ message: "Error al listar las citas", error: error.message });
    }
  },

  agendar: async (req, res) => {
    try {
      await CitaService.agendarCita(req.body);
      res.status(201).json({ agendado: true, message: "Recuerde llegar 15 minutos antes del horario de tu cita.\nTu cita ha sido agendada exitosamente.\nPara respetar el horario del centro, si llegas 15 minutos después de la hora asignada, la cita será reprogramda a otra fecga según disponibilidad." })
    } catch (error) {
      switch (error.message) {
        case "ALREADY_BOOKED":
          return res.status(409).json({ message: "Ya tienes una cita agendada en este horario" });
        case "OVERBOOKING":
          return res.status(409).json({ message: "No es posible agendar la cita por sobrecupo en este horario" });
        case "DATE_PAST_OR_TODAY":
          return res.status(400).json({ message: "No es posible agendar citas en fechas pasadas o el mismo día" });
        case "SCHEDULE_UNAVAILABLE":
          return res.status(400).json({ message: "El horario seleccionado no está disponible para agendar citas" });
        default:
          console.error("Error al agendar cita", error);
          return res.status(500).json({ message: "Error interno al agendar la cita" });
      }
    }
  },

  // buscarPorDia: async (req, res) => {
  //   try {
  //     //Frontend envía el dato
  //     const { search } = req.query;
  //     const citas = await CitaService.buscarPorFecha(search);

  //     //Mantenemos la estructura de respuesta (rows)
  //     res.status(200).json({ rows: citas })
  //   } catch (error) {
  //     if (error.message === "DATE_NOT_PROVIDED") {
  //       return res.status(400).json({ message: "La fecha es obligatoria para realizar la búsqueda" })
  //     }

  //     console.error("Error al buscasr citas", error);
  //     res.status(500).json({ error: "Error interno alverificar citas del día" })
  //   }
  // },

  consultarSobrecupo: async (req, res) => {
    try {
      const { fecha, horaf } = req.body;

      const haySobrecupo = await CitaService.verificarSobrecupo(fecha, horaf);

      return res.status(200).json({ sobrecupo: true });
    } catch (error) {
      if (error.message === "MISSING_DATA") {
        return res.status(400).json({ error: "Fecha y hora base son obligatorios para verificar sobrecupo" });

        console.error("Error al verificar sobrecupo", error);
        res.status(500).json({ error: "Error interno al verificar sobrecupo" });

      }
    }
  },
  eliminar: async (req, res) => {
    try {
      const { id } = req.query;
      await CitaService.eliminarCita(id);
      return res.status(200).json({ message: "Cita eliminada correctamente" });
    } catch (error) {
      console.error("Error al eliminar la cita: ", error);

      if (error.message === "ID_REQUIRED") {
        return res.status(400).json({ message: "Falta el ID de la cita" });
      }
      if (error.message === "NOT_FOUND") {
        return res.status(404).json({ message: "Cita no encontrada" });
      }

      return res.status(500).json({ message: "Error interno al eliminar la cita" });

    }
  },
  checkAvailability: async (req, res) => {
    try {
      const { fecha, tipoFac } = req.query

      if (!fecha || !tipoFac) {
        return res.status(400).json({ message: "Faltan datos" });
      }

      const blocked = await CitaService.obtenerDisponibilidad(fecha, tipoFac);

      return res.status(200).json({ blocked })

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error verificando disponibilidad" });
    }
  }
}