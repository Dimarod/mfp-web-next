import { pool } from "/config/db";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return listarCitas(req, res);
    case "POST":
      return evitarCitaDuplicada(req, res);
  }
}
const listarCitas = (req, res) => {
  pool.query("SELECT * FROM citasDermo", function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows);
    }
  });
};

const agendarCita = (req, res) => {
  const { fecha, tipoDermo, horaf, telefono } = req.body;
  const tempNombre = req.body.nombre;
  const nombre = tempNombre.trim();
  console.log(nombre);
  pool.query("INSERT INTO citasDermo SET ?", {
    nombre,
    fecha,
    horaf,
    tipoDermo,
    telefono,
  });
  return res.send("Creating");
};

const citasNutricion = (req, res) => {
  let weekday = new Date(req.body.fecha).getDay() + 1;
  console.log(weekday);
  pool.query(
    "SELECT * FROM citasDermo WHERE fecha = '" +
      req.body.fecha +
      "' AND tipoDermo = 'Nutricion' AND horaf = '" +
      req.body.horaf +
      "'",
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        if (rows.length < 1) {
          if (weekday === 6) {
            if (req.body.horaf >= 14001440 && req.body.horaf <= 18001840) {
              agendarCita(req, res);
            } else {
              let nutricion = true;
              return nutricion;
            }
          } else {
            let nutricion = true;
            return nutricion;
          }
        } else {
          let nutricion = true;
          return nutricion;
        }
      }
    }
  );
};
const evitarSobrecupo = (req, res) => {
  pool.query(
    "SELECT * FROM citasDermo WHERE fecha = '" +
      req.body.fecha +
      "' AND horaf = '" +
      req.body.horaf +
      "'",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        if (req.body.tipoDermo === "Nutricion") {
          citasNutricion(req, res);
        } else {
          if (rows.length >= 3) {
            let sobrecupo = true;
            return sobrecupo;
          } else {
            agendarCita(req, res);
          }
        }
      }
    }
  );
};
const evitarCitaDuplicada = (req, res) => {
  const tempNombre = req.body.nombre;
  const newName = tempNombre.trim();
  pool.query(
    "SELECT * FROM citasDermo WHERE nombre = '" +
      newName +
      "' AND fecha = '" +
      req.body.fecha +
      "'",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        if (rows.length >= 1) {
          let duplicada = true;
          return duplicada;
        } else {
          evitarSobrecupo(req, res);
        }
      }
    }
  );
};
