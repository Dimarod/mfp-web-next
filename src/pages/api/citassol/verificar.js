/* eslint-disable import/no-anonymous-default-export */
import { pool } from "../../../../config/db";

export default (req, res) => {
  if (req.method === "POST") {
    try {
      const { nombre, fecha } = req.body;
      pool.query(
        "SELECT * FROM citas WHERE nombre = '" +
          nombre +
          "' AND fecha = '" +
          fecha +
          "'",
        (err, rows, fields) => {
          if (err) {
            console.log("Hubo un error", err);
          } else {
            if (rows.length > 0) {
              return res.status(200).json({ existente: true });
            }

            return res.status(200).json({ existente: false });
          }
        }
      );
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
