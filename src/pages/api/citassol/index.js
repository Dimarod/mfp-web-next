import { pool } from "../../../../config/db";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return listarCitas(req, res);
    case "POST":
      return agendarCita(req, res);
  }
}
const listarCitas = (req, res) => {
  pool.query("SELECT * FROM citas", function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows);
    }
  });
};

const agendarCita = (req, res) => {
  try {
    const {fecha, horac, tipoCorp, telefono} = req.body;
    const tempNombre = req.body.nombre;
    const nombre = tempNombre.trim()
    pool.query("INSERT INTO citas SET ?", {nombre, fecha, horac, tipoCorp, telefono}, (err, rows, fields)=>{
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
