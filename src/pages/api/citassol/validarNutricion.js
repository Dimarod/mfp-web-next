/* eslint-disable import/no-anonymous-default-export */
import { pool } from "../../../../config/db";

export default (req, res) => {
  if (req.method === "POST") {
    try {
      const { fecha, horac, tipoCorp } = req.body;
      const weekday = new Date(fecha).getDay() + 1;
      if (weekday === 6) {
        if (horac >= 14001440 && horac <= 18001840) {
          if (tipoCorp === "Nutricion") {
            pool.query(
              "SELECT * FROM citas WHERE fecha = '" +
                fecha +
                "' AND horac = '" +
                horac +
                "' AND tipoCorp = 'Nutricion'",
              (err, rows, fields) => {
                if (err) {
                  console.log("Hubo un error", err);
                } else {
                  if (rows.length > 0) {
                    return res
                      .status(200)
                      .json({
                        nutricion: true,
                        message:
                          "Este horario ya está lleno, por favor seleccione uno diferente",
                      });
                  }
                }
                return res.status(200).json({
                  nutricion: false,
                  message:
                    "Los horarios de nutricion estan llenos, por favor seleccione un horario diferente",
                });
              }
            );
          } else {
            return;
          }
        } else {
          return res.status(200).json({
            notNutrition: true,
            message:
              "Los horarios para nutricion son de 2:00 Pm - 6:40 Pm los días sábado",
          });
        }
      } else {
        return res.status(200).json({
          notNutrition: true,
          message:
            "Los horarios para nutricion son de 2:00 Pm - 6:40 Pm los días sábado",
        });
      }
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
