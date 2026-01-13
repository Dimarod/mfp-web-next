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
    "SELECT * FROM citasPostCorp ORDER BY horapc",
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
    const { fecha, horapc, tipoPostCorp, telefono } = req.body;
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
    }else if(dayDate === 24 && horapc > 11001200){
     return res.status(200).json({
      unavailable: true,
      message: "No tenemos atención disponible para el horario seleccionado"
     })
    } else if (weekday === 1) {
      if (tipoPostCorp !== "Post") {
        return res.status(200).json({
          unavailable: true,
          message: "No tenemos atención para el horario seleccionado",
        });
      } else {
        if (horapc >= 9001000 && horapc <= 12001300) {
          pool.query(
            "SELECT * FROM citasPostCorp WHERE fecha = '" +
              fecha +
              "' AND horapc = '" +
              horapc +
              "' AND tipoPostCorp = 'Post'",
            (err, rows, fields) => {
              if (err) {
                throw new Error(err);
              } else {
                if (rows.length >= 1) {
                  return res.status(200).json({
                    unavailable: true,
                    message:
                      "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
                  });
                } else {
                  pool.query(
                    "INSERT INTO citasPostCorp SET ?",
                    { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
            }
          );
        } else {
          return res.status(200).json({
            unavailable: true,
            message: "No tenemos atención para el horario seleccionado",
          });
        }
      }
    } else if (weekday === 7) {
      if (tipoPostCorp !== "Post") {
        return res.status(200).json({
          unavailable: true,
          message: "No tenemos atención para el horario seleccionado",
        });
      } else {
        if (horapc >= 800900 && horapc <= 11001200) {
          pool.query(
            "SELECT * FROM citasPostCorp WHERE fecha = '" +
              fecha +
              "' AND horapc = '" +
              horapc +
              "' AND tipoPostCorp = 'Post'",
            (err, rows, fields) => {
              if (err) {
                throw new Error(err);
              } else {
                if (rows.length >= 4) {
                  return res.status(200).json({
                    unavailable: true,
                    message:
                      "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
                  });
                } else {
                  pool.query(
                    "INSERT INTO citasPostCorp SET ?",
                    { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
            }
          );
        } else {
          return res.status(200).json({
            unavailable: true,
            message: "No tenemos atención para el horario seleccionado",
          });
        }
      }
    } else if (tipoPostCorp === "Valoracion") {
      pool.query(
        "SELECT * FROM citasPostCorp WHERE fecha = '" +
          fecha +
          "' AND horapc = '" +
          horapc +
          "' AND tipoPostCorp = 'Valoracion'",
        (err, rows, fields) => {
          if (err) {
            throw new Error(err);
          } else {
            if (rows.length >= 1) {
              return res.status(200).json({
                unavailable: true,
                message:
                  "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
              });
            } else {
              pool.query(
                "INSERT INTO citasPostCorp SET ?",
                { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
        }
      );
    } else if (tipoPostCorp === "Preoperatorio") {
      pool.query(
        "SELECT * FROM citasPostCorp WHERE fecha = '" +
          fecha +
          "' AND horapc = '" +
          horapc +
          "' AND tipoPostCorp = 'Preoperatorio'",
        (err, rows, fields) => {
          if (err) {
            throw new Error(err);
          } else {
            if (rows.length >= 1) {
              return res.status(200).json({
                unavailable: true,
                message:
                  "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
              });
            } else {
              pool.query(
                "INSERT INTO citasPostCorp SET ?",
                { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
        }
      );
    } else if (tipoPostCorp === "Post") {
      pool.query(
        "SELECT * FROM citasPostCorp WHERE fecha = '" +
          fecha +
          "' AND horapc = '" +
          horapc +
          "' AND tipoPostCorp = 'Post'",
        (err, rows, fields) => {
          if (err) {
            throw new Error(err);
          } else {
            if (rows.length >= 4) {
              return res.status(200).json({
                unavailable: true,
                message:
                  "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
              });
            } else {
              pool.query(
                "INSERT INTO citasPostCorp SET ?",
                { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
        }
      );
    } else if (tipoPostCorp === "Postmoldeo") {
      pool.query(
        "SELECT * FROM citasPostCorp WHERE fecha = '" +
          fecha +
          "' AND horapc = '" +
          horapc +
          "' AND tipoPostCorp = 'Postmoldeo'",
        (err, rows, fields) => {
          if (err) {
            throw new Error(err);
          } else {
            if (rows.length >= 4) {
              return res.status(200).json({
                unavailable: true,
                message:
                  "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
              });
            } else {
              pool.query(
                "INSERT INTO citasPostCorp SET ?",
                { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
        }
      );
    } else if (tipoPostCorp === "Correccion") {
      pool.query(
        "SELECT * FROM citasPostCorp WHERE fecha = '" +
          fecha +
          "' AND horapc = '" +
          horapc +
          "' AND tipoPostCorp = 'Correccion'",
        (err, rows, fields) => {
          if (err) {
            throw new Error(err);
          } else {
            if (rows.length >= 1) {
              return res.status(200).json({
                unavailable: true,
                message:
                  "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
              });
            } else {
              pool.query(
                "INSERT INTO citasPostCorp SET ?",
                { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
        }
      );
    } else if (tipoPostCorp === "Postparto") {
      pool.query(
        "SELECT * FROM citasPostCorp WHERE fecha = '" +
          fecha +
          "' AND horapc = '" +
          horapc +
          "' AND tipoPostCorp = 'Postparto'",
        (err, rows, fields) => {
          if (err) {
            throw new Error(err);
          } else {
            if (rows.length >= 1) {
              return res.status(200).json({
                unavailable: true,
                message:
                  "El horario seleccionado presenta sobrecupo, por favor elija uno distinto",
              });
            } else {
              pool.query(
                "INSERT INTO citasPostCorp SET ?",
                { _id, nombre, fecha, horapc, tipoPostCorp, telefono },
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
        }
      );
    }
  } catch (error) {
    console.log("Hubo un error", error);
  }
};
