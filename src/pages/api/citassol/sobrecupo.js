/* eslint-disable import/no-anonymous-default-export */
import { pool } from "../../../../config/db";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { fecha, horac } = req.body;

      const [rows] = pool.execute(
        "SELECT * FROM citas WHERE fecha = ? AND horac = ?",
        [fecha, horac]
      );
      if (rows.length >= 3) {
        return res.status(200).json({ sobrecupo: true });
      }
      return res.status(200).json({ sobrecupo: false });
    } catch (error) {
      console.log("Error al verificar cita", error);
      return res
        .status(500)
        .json({ error: "Error interno al verificar cita duplicada" });
    }
  } else {
    return res.status(405).json({ error: "Metodo no permitido" });
  }
};
