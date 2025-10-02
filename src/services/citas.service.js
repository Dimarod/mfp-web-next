import {pool} from "./db.service";

//Función 1: Obtener todas las citas (listar)
export const findAllCitas = (table) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table} ORDER BY horab`, (err, rows) => {
            if(err) return reject(err);
            resolve(rows)
        })
    })
}

//Función 2: Verificar si ya existe una cita para ese nombre/fecha
export const checkExistingAppoinment = (table, nombre, fecha) => {
    return new Promise((resolve, reject) => {
        //Usar ?? para prevenir injecciones SQL
        const query = `SELECT COUNT(*) AS count FROM ${table} WHERE nombre = ? AND fecha = ?`;
        pool.query(query, [nombre, fecha]), (err, rows) => {
            if(err) return reject(err)
            resolve(rows[0].count > 0);
        }
    })
}

//Función 3 Verificar sobrecupo para hora o fecha
export const checkCapacity = (table, fecha, hora, tipo, maxCapacity = 1) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT COUNT(*) AS count FROM ${table} WHERE fecha = ? AND horab = ? AND tipoBaq = ?`;
        pool.query(query, [fecha, hora, tipo], (err, rows) => {
            if(err) return reject(err)
            resolve(rows[0].count >= maxCapacity)
        })
    })
}

//Guardar la nueva cita
export const saveCita = (citaData) => {
  return new Promise((resolve, reject) => {
    // **¡Seguridad!** Usar objetos y placeholders
    pool.query("INSERT INTO citasBaq SET ?", [citaData], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};