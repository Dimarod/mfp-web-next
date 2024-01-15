import { createPool } from "mysql2";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '2215802375Dm!',
    port: 3306,
    database: 'citas'
})

export {pool}