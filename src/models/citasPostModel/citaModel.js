import { pool } from "@/config/db";

export const citaModel = {
    getAll: async () => {
        const query = "SELECT * FROM citasPostCorp ORDER BY horapc";
        const [rows] = await pool.query(query);
        // --- DEBUG: Esto saldrá en tu terminal negra ---
        console.log("--> Ejecutando Query getAll:", query);
        // -----------------------------------------------
        return rows;
    },
    create: async (citaData) => {
        const { _id, nombre, fecha, horapc, tipoPostCorp, telefono } = citaData;
        const query = "INSERT INTO citasPostCorp SET ?";
        const [result] = await pool.query(query, { _id, nombre, fecha, horapc, tipoPostCorp, telefono });
        return result;
    },

    getByDate: async (fecha) => {
        const query = "SELECT * FROM citasPostCorp WHERE fecha = ? ORDER BY horapc";

        console.log("--> Ejecutando Query getByDate:", query, "Con fecha:", fecha);

        const [rows] = await pool.query(query, [fecha]);
        return rows;
    },
    getByDateAndSlot: async (fecha, horapc) => {
        const query = `
        SELECT * FROM citasPostCorp
        WHERE fecha = ?
        AND horapc = ?
        AND tipoPostCorp != 'Nutricion'
        `;

        const [rows] = await pool.query(query, [fecha, horapc]);
        return rows;
    },
    deleteById: async (id) => {
        const query = "DELETE FROM citasPostCorp WHERE _id = ?";
        const [result] = await pool.query(query, [id]);
        return result;
    },
    countByType: async (fecha, horapc, tipoPostCorp) => {
        const query = "SELECT COUNT(*) as total FROM citasPostCorp WHERE fecha = ? AND horapc = ? AND tipoPostCorp = ?";
        const [rows] = await pool.query(query, [fecha, horapc, tipoPostCorp]);
        return rows[0].total;
    },
    getOccupiedSlots: async (fecha) => {
        const query = "SELECT horapc, tipoPostCorp, COUNT(*) as total FROM citasPostCorp WHERE fecha = ? GROUP BY horapc, tipoPostCorp";
        const [rows] = await pool.query(query, [fecha]);
        return rows;
    }
}
