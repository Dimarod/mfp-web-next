/* eslint-disable import/no-anonymous-default-export */
import { pool } from "../../../../config/db";

export default (req, res) => {
  if (req.method === "POST") {
    try {
      const { search } = req.body;
      pool.query(
        "SELECT * FROM citas WHERE fecha = '" +
          search +
          "' ORDER BY horac",
        (err, rows, fields) => {
          if(err){
            console.log("Hubo un error",);
          }
          return res.status(200).json({rows})
        }
      );
    } catch (error) {
      console.log("Error al buscar citas del día", error);
      return res
        .status(500)
        .json({ error: "Error interno al verificar citas del día" });
    }
  } else {
    return res.status(405).json({ error: "Metodo no permitido" });
  }
};
