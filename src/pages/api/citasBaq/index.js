import { pool } from "../../../../config/db";
import crypto from "node:crypto";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return listarCitas(req, res);
    case "POST":
      return agendarCita(req, res);
  }
}
const listarCitas = (req, res) => {
  pool.query(
    "SELECT * FROM citasBaq ORDER BY horab",
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
};

const agendarCita = (req, res) => {
  try {
    const { fecha, horab, tipoBaq, telefono } = req.body;
    const _id = crypto.randomUUID();
    const nombreOri = req.body.nombre;
    const nombreTmp = nombreOri.trim();
    const apellidoOri = req.body.apellido;
    const apellidoTmp = apellidoOri.trim();
    const nombre = nombreTmp + " " + apellidoTmp;
    const dayDate = new Date(fecha).getUTCDate();
    const dayAct = new Date().getUTCDate();
    const monthAct = new Date().getUTCMonth();
    const monthDate = new Date(req.body.fecha).getUTCMonth();
    const yearAct = new Date().getFullYear();
    const yearDate = new Date(req.body.fecha).getFullYear();
    const weekday = new Date(fecha).getUTCDay() + 1;

     if(dayDate <= dayAct && monthDate <= monthAct && yearDate <= yearAct) {
      return res.status(200).json({
        noActual: true,
        message: "No puede agendarse para días anteriores o el día en curso",
      });
     }else if(weekday === 2 || weekday === 4 || weekday === 6){
      if(horab > 12001240 && horab <= 14401520){
       return res.status(200).json({unavailable: true, message: "No tenemos atención para el horario seleccionado"})
      }
     }else if(weekday === 3 || weekday === 5 || weekday === 7){
      if(horab >= 12001240 && horab < 14001440){
       return res.status(200).json({unavailable: true, message: "No tenemos atención para el horario seleccionado"})
      }
     }else if(weekday === 7){
      if(req.body.horab <= 700800 || req.body.horab >= 11201200){
       return res.status(200).json({unavailable: true, message: "No tenemos agenda para el horario seleccionado"})
      }
     }
    pool.query(
      "INSERT INTO citasBaq SET ?",
      { _id, nombre, fecha, horab, tipoBaq, telefono },
      (err, rows, fields) => {
        if (err) {
          console.log("Hubo un error al tratar de agendar la cita", err);
        } else {
          res.status(200).json({
            agendado: true,
            message: "Su cita ha sido agendada exitosamente",
          });
        }
      }
    );
  } catch (error) {
    console.log("Hubo un error", error);
  }
};
