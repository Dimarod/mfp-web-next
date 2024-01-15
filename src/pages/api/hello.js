// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "/config/db";
export default function handler(req, res) {
  const result = pool.query(
    "SELECT * FROM citas",
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
}
