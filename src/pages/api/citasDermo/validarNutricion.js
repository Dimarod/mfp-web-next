/* eslint-disable import/no-anonymous-default-export */
import { pool } from "../../../../config/db";

export default (req, res) => {
  if (req.method === "POST") {
    try {
      const { fecha, horaf, tipoDermo } = req.body;
      const weekday = new Date(fecha).getDay() + 1;
      if (tipoDermo === "Nutricion") {
        if (weekday === 6) {
          if (horaf >= 14001440 && horaf <= 18001840) {
            pool.query(
              "SELECT * FROM citasDermo WHERE fecha = '" +
                fecha +
                "' AND horaf = '" +
                horaf +
                "' AND tipoDermo = 'Nutricion'",
              (err, rows, fields) => {
                if (err) {
                  console.log("Hubo un error inesperado", err);
                  return;
                } else {
                  if (rows > 0) {
                    return res.status(200).json({
                      nutricion: true,
                      message:
                        "Este horario está saturado, por favor selecciona uno diferente",
                    });
                  }
                  return res.status(200).json({ nutricion: false });
                }
              }
            );
          } else {
            return res.status(200).json({
              notNutrition: true,
              message:
                "El horario para las citas de nutrición es: Sábados de 2:00 PM - 6:00 PM",
            });
          }
        } else {
          return res.status(200).json({
            notNutrition: true,
            message:
              "El horario para las citas de nutrición es: Sábados de 2:00 PM - 6:00 PM",
          });
        }
      }
      return res.status(200).json({ notNutricion: false });
    } catch (error) {
      console.log("Hubo un error", error);
      return res.status(500).json({ error, message: "Hubo un error" });
    }
  } else {
    return res.status(405).json({ error: "Metodo no permitido" });
  }
};
