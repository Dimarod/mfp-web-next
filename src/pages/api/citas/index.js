import { pool } from "../../../../config/db";

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
    "SELECT * FROM citas ORDER BY horac",
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
    const { fecha, horac, tipoCorp, telefono } = req.body;
    const nombreOri = req.body.nombre;
    const nombreTmp = nombreOri.trim();
    const apellidoOri = req.body.apellido
    const apellidoTmp = apellidoOri.trim()
    const nombre = nombreTmp + " " + apellidoTmp
    const dayDate = new Date(fecha).getUTCDate();
    const dayAct = new Date().getUTCDate();
    const monthAct = new Date().getUTCMonth();
    const monthDate = new Date(req.body.fecha).getUTCMonth();
    const yearAct = new Date().getUTCFullYear();
    const yearDate = new Date(req.body.fecha).getUTCFullYear();
    const weekday = new Date(fecha).getUTCDay() + 1;

    console.log(weekday);

    if (dayDate <= dayAct && monthDate <= monthAct && yearDate <= yearAct) {
      return res.status(200).json({
        noActual: true,
        message: "No puede agendarse para días anteriores o el día en curso",
      });
    } else if (weekday === 1 && req.body.horac < 15001600) {
       if(req.body.tipoCorp != "Post"){
        console.log(weekday);
        return res.status(200).json({
          weekday: true,
          message: "No se permiten agendas los domingos",
        });
       }
    }else if(weekday === 1 && req.body.horac > 15001600){
     return res.status(200).json({
      unavailable: true,
      message: "No tenemos agenda disponible para el día seleccionado"
     })
    }else if(dayDate === 8 && req.body.horac < 15201600){
     if(req.body.tipoCorp != "Post"){
      res.status(200).json({
       unavailable: true,
       message: "No tenemos agenda para el día seleccionado"
      })
     }
    }else if(dayDate === 19 && req.body.horac > 16001700){
     return res.status(200).json({
      unavailable: true,
      message: "No tenemos agenda disponible en este horario"
     })
    }else if(dayDate === 8 && req.body.horac > 15001600){
     return res.status(200).json({
      unavailable: true,
      message: "No tenemos agenda para el día seleccionado"
     })
    }else if(weekday === 4){
     return res.status(200).json({
       weekday : true,
       message: "No tenemos agenda para el día seleccionado"
     })
    }else if(weekday === 7){
     return res.status(200).json({
      unavailable: true,
      message: "No tenemos agenda para el día seleccionado"
     })
    }else if(dayDate >= 16){
     return res.status(200).json({
      unavailable: true,
      message: "No tenemos agenda para el día seleccionado"
     })
    }
    pool.query(
      "INSERT INTO citas SET ?",
      { nombre, fecha, horac, tipoCorp, telefono },
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
