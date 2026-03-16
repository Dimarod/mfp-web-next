import { createPool } from "mysql2/promise";

     export const pool = createPool({
         host: 'localhost',
        user: 'dimarod',
         password: '2215802375$Dm',
         port: 3306,
         database: 'citas'
    })

// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port: 3306,
//     database: 'citas',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })