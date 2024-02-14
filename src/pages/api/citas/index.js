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
    const nombre = nombreOri.trim();
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
    } else if (weekday === 1) {
      console.log(weekday);
      return res.status(200).json({
        weekday: true,
        message: "No se permiten agendas los domingos",
      });
    }else if(weekday === 7 && horac >= 16401720){
      return res.status(200).json({
        unavailable: true,
        message: "No tenemos agenda para el horario seleccionado",
      });
    } else if (dayDate === 10 || dayDate === 11 || dayDate === 12 || dayDate === 13) {
      return res.status(200).json({
        unavailable: true,
        message: "No tenemos agenda para el horario seleccionado",
      });
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
