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
  pool.query(
    `SELECT * FROM citasDermoBaq WHERE nombre = "${req.query.id}"`,
    (err, rows, fields) => {
      console.log(err);
      console.log(rows);
      return res.status(200).json(rows);
    }
  );
};

const deleteOneAppoinment = (req, res) => {
  pool.query(
    `DELETE FROM citasDermoBaq WHERE _id = "${req.query.id}"`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(204).json();
      }
    }
  );
};
