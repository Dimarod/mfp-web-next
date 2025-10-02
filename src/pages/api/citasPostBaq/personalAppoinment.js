import { pool } from "/config/db";

export default function handler(req, res) {
  switch (req.method) {
    case "DELETE":
      return deleteOneAppoinment(req, res);
    case "GET":
      return getOneAppointment(req, res);

    default:
      return res.send("Epa, hubo un error");
  }
}

const getOneAppointment = (req, res) => {
  const {name, sede} = req.query;
  console.log(name, sede);
  pool.query(
    `SELECT * FROM ${sede} WHERE nombre = '${name}' ORDER BY fecha DESC LIMIT 1`,
    (err, rows, fields) => {
      if(err){
        console.log("Hubo un error", err);
      }
      return res.status(200).json(rows);
    }
  );
};

const deleteOneAppoinment = (req, res) => {
  pool.query(
    `DELETE FROM citasPostCorp WHERE _id = "${req.query.id}"`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(204).json();
      }
    }
  );
};
