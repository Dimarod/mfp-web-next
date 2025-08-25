import { pool } from "../../../../config/db";
import crypto from "node:crypto";

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
    "SELECT * FROM citasBaq ORDER BY horab",
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
    const { fecha, horab, tipoBaq, telefono } = req.body;
    const _id = crypto.randomUUID();
    const nombreOri = req.body.nombre;
    const nombreTmp = nombreOri.trim();
    const apellidoOri = req.body.apellido;
    const apellidoTmp = apellidoOri.trim();
    const nombre = nombreTmp + " " + apellidoTmp;
    const dayDate = new Date(fecha).getUTCDate();
    const dayAct = new Date().getUTCDate();
    const monthAct = new Date().getUTCMonth();
    const monthDate = new Date(req.body.fecha).getUTCMonth();
    const yearAct = new Date().getFullYear();
    const yearDate = new Date(req.body.fecha).getFullYear();
    const weekday = new Date(fecha).getUTCDay() + 1;

    if (dayDate <= dayAct && monthDate <= monthAct && yearDate <= yearAct) {
      return res.status(200).json({
        noActual: true,
        message: "No puede agendarse para días anteriores o el día en curso",
      });
    } else if (req.body.horab === "13201400") {
      return res.status(200).json({
        unavailable: true,
        message: "No tenemos agenda para el horario seleccionado",
      });
    } else if (req.body.tipoBaq === "Post" && weekday != 7) {
      pool.query(
        "SELECT * FROM citasBaq WHERE nombre = '" +
          nombre +
          "' AND fecha = '" +
          fecha +
          "'",
        (err, rows, fields) => {
          if (err) {
            console.log("Hubo un error", err);
          } else {
            if (rows.length === 0) {
              pool.query(
                "SELECT * FROM citasBaq WHERE fecha = '" +
                  fecha +
                  "' AND horab = '" +
                  horab +
                  "' AND tipoBaq = 'Post'",
                (err, rows, fields) => {
                  if (rows.length >= 1) {
                    return res.status(200).json({
                      unavailable: true,
                      message:
                        "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
                    });
                  } else {
                    pool.query(
                      "INSERT INTO citasBaq SET ?",
                      { _id, nombre, fecha, horab, tipoBaq, telefono },
                      (err, rows, fields) => {
                        if (err) {
                          console.log("Hubo un error al agendar la cita", err);
                        } else {
                          return res.status(200).json({
                            agendado: true,
                            message: "Su cita ha sido agendada exitosamente",
                          });
                        }
                      }
                    );
                  }
                }
              );
            } else {
              return res.status(200).json({
                unavailable: true,
                message: "No se permite agendar en el horario seleccionado",
              });
            }
          }
        }
      );
      return;
    } else if (tipoBaq === "Postmoldeo" && weekday !== 7) {
      pool.query(
        "SELECT * FROM citasBaq WHERE nombre = '" +
          nombre +
          "' AND fecha = '" +
          fecha +
          "'",
        (err, rows, fields) => {
          if (err) {
            console.log("Hubo un error al verificar", err);
          } else {
            if (rows.length === 0) {
              pool.query(
                "SELECT * FROM citasBaq WHERE fecha = '" +
                  fecha +
                  "' AND horab = '" +
                  horab +
                  "' AND tipoBaq = 'Postmoldeo'",
                (err, rows, fields) => {
                  if (rows.length >= 1) {
                    return res.status(200).json({
                      unavailable: true,
                      message:
                        "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
                    });
                  } else {
                    pool.query(
                      "INSERT INTO citasBaq SET ?",
                      { _id, nombre, fecha, horab, tipoBaq, telefono },
                      (err, rows, fields) => {
                        if (err) {
                          console.log("Hubo un error al agendar la cita", err);
                        } else {
                          return res.status(200).json({
                            agendado: true,
                            message: "Su cita ha sido agendada exitosamente",
                          });
                        }
                      }
                    );
                  }
                }
              );
            } else {
              return res.status(200).json({
                unavailable: true,
                message: "No se permite agendar en el horario seleccionado",
              });
            }
          }
        }
      );
      return;
    }else if(dayDate === 15 && req.body.horab >= 12401320){
     return res.status(200).json({
      unavailable: true, 
      message: "No tenemos agenda disponible para el horario seleccionado"
     })
    }else if (
      weekday === 1 &&
      req.body.horab < 12001240 &&
      req.body.horab > 700800
    ) {
      if (req.body.tipoBaq != "Post") {
        return res.status(200).json({
          weekday: true,
          message: "No se permiten agendas los domingos",
        });
      }
    } else if (
      weekday === 1 &&
      (req.body.horab > 11201200 || req.body.horab < 800840)
    ) {
      return res.status(200).json({
        unavailable: true,
        message: "No tenemos agenda para el día seleccionado",
      });
    } else if (
      weekday === 7 &&
      req.body.horab < 12001240 &&
      req.body.horab > 700800
    ) {
      if (req.body.tipoBaq === "Post") {
        console.log("Esto es un post los sábados solo dos turnos");
        pool.query(
          "SELECT * FROM citasBaq WHERE fecha = '" +
            fecha +
            "' AND horab = '" +
            horab +
            "' AND tipoBaq = 'Post'",
          (err, rows, fields) => {
            if (rows.length >= 1) {
              return res.status(200).json({
                unavailable: true,
                message: "No tenemos agenda para el horario seleccionado",
              });
            } else {
              pool.query(
                "INSERT INTO citasBaq SET ?",
                { _id, nombre, fecha, horab, tipoBaq, telefono },
                (err, rows, fields) => {
                  if (err) {
                    console.log("Hubo un error al agendar la cita", err);
                  } else {
                    return res.status(200).json({
                      agendado: true,
                      message: "Su cita ha sido agendada exitosamente",
                    });
                  }
                }
              );
            }
          }
        );
      }else if (req.body.tipoBaq === "Postmoldeo") {
        pool.query(
          "SELECT * FROM citasBaq WHERE fecha = '" +
            fecha +
            "' AND horab = '" +
            horab +
            "' AND tipoBaq = 'Postmoldeo'",
          (err, rows, fields) => {
            if (rows.length >= 2) {
              return res.status(200).json({
                unavailable: true,
                message: "No tenemos agenda para el horario seleccionado",
              });
            } else {
              pool.query(
                "INSERT INTO citasBaq SET ?",
                { _id, nombre, fecha, horab, tipoBaq, telefono },
                (err, rows, fields) => {
                  if (err) {
                    console.log("Hubo un error al agendar la cita", err);
                  } else {
                    return res.status(200).json({
                      agendado: true,
                      message: "Su cita ha sido agendada exitosamente",
                    });
                  }
                }
              );
            }
          }
        );
      } else {
        return res.status(200).json({
          unavailable: true,
          message: "No tenemos agenda para el horario seleccionado",
        });
      }
      return;
    } else if (
      weekday === 7 &&
      (req.body.horab > 11201200 || req.body.horab < 800840)
    ) {
      return res.status(200).json({
        unavailable: true,
        message: "No tenemos agenda para el horario seleccionado",
      });
    } else if (
      (weekday === 2 || weekday === 4 || weekday === 6) &&
      req.body.horab >= 12001240 &&
      req.body.horab <= 13201400
    ) {
      if (req.body.tipoBaq !== "Post") {
        return res.status(200).json({
          unavailable: true,
          message: "No tenemos agenda para el horario seleccionado",
        });
      }
    } else if (
      (weekday === 3 || weekday === 5) &&
      req.body.horab >= 12001240 &&
      req.body.horab <= 13201400
    ) {
      if (req.body.tipoBaq !== "Post") {
        return res.status(200).json({
          unavailable: true,
          message: "No tenemos agenda para el horario seleccionado",
        });
      }
    }
    pool.query(
      "INSERT INTO citasBaq SET ?",
      { _id, nombre, fecha, horab, tipoBaq, telefono },
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
