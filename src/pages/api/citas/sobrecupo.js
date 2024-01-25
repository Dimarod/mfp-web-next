/* eslint-disable import/no-anonymous-default-export */
import { pool } from "../../../../config/db";

export default (req, res) => {
  if (req.method === "POST") {
    try {
      const { fecha, horac } = req.body;
      pool.query(
        "SELECT * FROM citas WHERE fecha = '" +
          fecha +
          "' AND horac = '" +
          horac +
          "' AND tipoCorp != 'Nutricion'",
        (err, rows, fields) => {
          if (rows.length >= 3) {
            return res.status(200).json({ sobrecupo: true });
          }
          return res.status(200).json({ sobrecupo: false });
        }
      );
    } catch (error) {
      console.log("Error al verificar sobrecupo", error);
      return res
        .status(500)
        .json({ error: "Error interno al verificar sobrecupo de horarios" });
    }
  } else {
    return res.status(405).json({ error: "Metodo no permitido" });
  }
};