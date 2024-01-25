import { pool } from "/config/db";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return listarCitas(req, res);
    case "POST":
      return agendarCita(req, res);
  }
}
const listarCitas = (req, res) => {
  pool.query("SELECT * FROM citasBaq", function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows);
    }
  });
};

const agendarCita = (req, res) => {
  try {
    const {fecha, horab, tipoBaq, telefono} = req.body;
    const tempNombre = req.body.nombre;
    const nombre = tempNombre.trim()
    pool.query("INSERT INTO citasBaq SET ?", {nombre, fecha, horab, tipoBaq, telefono}, (err, rows, fields)=>{
      if(err){
        console.log("Hubo un error al tratar de agendar la cita", err);
      }else{
        res.status(200).json({agendado: true, message: "Su cita ha sido agendada exitosamente"})
      }
    })
  } catch (error) {
    console.log("Hubo un error", error);
  }
};

const citasNutricion = (req, res) => {
  let weekday = new Date(req.body.fecha).getDay() + 1;
  console.log(weekday);
  pool.query(
    "SELECT * FROM citasBaq WHERE fecha = '" +
      req.body.fecha +
      "' AND tipoBaq = 'Nutricion' AND horab = '" +
      req.body.horab +
      "'",
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        if (rows.length < 1) {
          if (weekday === 6) {
            if (req.body.horab >= 14001440 && req.body.horab <= 18001840) {
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