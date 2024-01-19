import { pool } from "/config/db";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getCitas(req, res)
    case "POST":
      const { nombre, fecha, tipoDermoBaq, horafb, telefono } = req.body;
      pool.query("INSERT INTO citasDermoBaq SET ?", {
        nombre,
        fecha,
        horafb,
        tipoDermoBaq,
        telefono,
      });
      console.log(req.method);
      return res.send("Creating");
  }
}

const getCitas = (req, res) => {
  pool.query("SELECT * FROM citasDermoBaq", function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows)
    }
  });
};
