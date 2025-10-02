import crypto from "node:crypto";
import * as citasService from "../services/citas.service";

//Petición GET /api/citas/ (listar)
export async function listarCitasController(req, res) {
  try {
    //Llama el servicio para obtener los datos
    const rows = await citasService.findAllCitas((table = "citasBaq"));
    //Responde al cliente
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al listar las citas: ", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

//Lógica para manejar la petición POST
export async function agendarCitaController(req, res) {
  const {
    fecha,
    horab,
    tipoBaq,
    telefono,
    nombre: nombreOri,
    apellido: apellidoOri,
  } = req.body;

  //Preparación de datos
  const _id = crypto.randomUUID();
  const nombreCompleto = `${nombreOri.trim()} ${apellidoOri.trim()}`;
  const now = new Date();
  const appoinmentDate = new Date(fecha);
  const weekday = appoinmentDate.getUTCDay() + 1; //Domingo = 1, Sábado = 7

  //Validaciones de negocio
  //Validación de fecha (No Anterior o No Actual)
  const isPastDate = appoinmentDate.toDateString() <= now.toDateString();
  if (isPastDate) {
    return res.status(400).json({
      noActual: true,
      message: "No puede agendarse en días anteriores ni el día en curso",
    });
  }

  //B) Horario 13201400 no disponible
  if (horab === "13201400") {
    return res.status(400).json({
      unavailable: true,
      message: "No tenemos agenda para el horario seleccionado.",
    });
  }

  //C) No agendar dos veces el mismo día
  try {
    const exists = await citasService.checkExistingAppoinment(table="citasBaq", nombreCompleto, fecha)
    if(exists){
        return res.status(400).json({
            unavailable: true,
            message: "Ya tiene una cita agendada para este día"
        })
    }
  } catch (error) {
    console.error("Error verificando la existencia de la cita", error);
    return res.status(500).json({message: "Error de validación de cita"})
    
  }
}
