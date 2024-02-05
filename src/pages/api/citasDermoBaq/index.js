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
    "SELECT * FROM citasDermoBaq ORDER BY horafb",
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
    const { fecha, horafb, tipoDermoBaq, telefono } = req.body;
    const nombreOri = req.body.nombre;
    const divName = nombreOri.trim().split(" ");
    const longName = divName.length;
    const firstName = divName[0];
    const lastName = divName[longName - 1];
    const nombre = firstName + " " + lastName;
    const dayDate = new Date(fecha).getUTCDate();
    const dayAct = new Date().getUTCDate();
    const monthAct = new Date().getUTCMonth();
    const monthDate = new Date(req.body.fecha).getUTCMonth();
    const yearAct = new Date().getFullYear();
    const yearDate = new Date(req.body.fecha).getFullYear();
    const weekday = new Date(fecha).getDay() + 1;

    if (dayDate <= dayAct && monthDate <= monthAct && yearDate <= yearAct) {
      return res
        .status(200)
        .json({
          noActual: true,
          message: "No puede agendarse para días anteriores o el día en curso",
        });
    } else if (weekday === 7) {
      return res
        .status(200)
        .json({
          weekday: true,
          message: "No se permiten agendas los domingos",
        });
    } else if (req.body.tipoDermoBaq) {
      return res
        .status(200)
        .json({
          unavailable: true,
          message: "No tenemos agenda para el horario seleccionado",
        });
    }
    pool.query(
      "INSERT INTO citasDermoBaq SET ?",
      { nombre, fecha, horafb, tipoDermoBaq, telefono },
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
