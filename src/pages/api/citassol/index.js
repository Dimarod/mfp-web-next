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
  pool.query("SELECT * FROM citas", function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows);
    }
  });
};

const agendarCita = async (req, res) => {
  try {
    const { fecha, tipoCorp, horac, telefono } = req.body;
    const tempNombre = req.body.nombre;
    const nombre = tempNombre.trim();

    pool.execute(
      "INSERT INTO citas (nombre, fecha, horac, tipoCorp, telefono) VALUES (?, ?, ?, ?, ?)",
      [nombre, fecha, horac, tipoCorp, telefono]
    );
    return res.status(200).json({agendado: true, message: "Usted ha sido agendado exitosamente"})
  } catch (error) {
    console.log("Error al agendar la cita", error);
    return res.status(500).json({agendado: false, message: "Ocurrió un error interno al tratar de hacer esto"})
  }
};
