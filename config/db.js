import { createPool } from "mysql2";

 const pool = createPool({
     host: 'localhost',
     user: 'dimarod',
     password: '2215802375$Dm',
     port: 3306,
     database: 'citas'
 })

//const pool = createPool({
//    host: 'localhost',
//    user: 'root',
//    password: '',
//    port: 3306,
//    database: 'citas'
//})

export {pool}
