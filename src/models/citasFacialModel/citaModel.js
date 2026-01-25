import { pool } from "@/config/db";

export const citaModel = {
    getAll: async () => {
        const query = "SELECT * FROM citasFac ORDER BY horaf";
        const [rows] = await pool.query(query);
        // --- DEBUG: Esto saldrá en tu terminal negra ---
        console.log("--> Ejecutando Query getAll:", query);
        // -----------------------------------------------
        return rows;
    },
    create: async (citaData) => {
        const { _id, nombre, fecha, horaf, tipoFac, telefono } = citaData;
        const query = "INSERT INTO citasFac SET ?";
        const [result] = await pool.query(query, { _id, nombre, fecha, horaf, tipoFac, telefono });
        return result;
    },

    getByDate: async (fecha) => {
        const query = "SELECT * FROM citasFac WHERE fecha = ?";

        console.log("--> Ejecutando Query getByDate:", query, "Con fecha:", fecha);

        const [rows] = await pool.query(query, [fecha]);
        return rows;
    },
    getByDateAndSlot: async (fecha, horaf) => {
        const query = `
        SELECT * FROM citasFac
        WHERE fecha = ?
        AND horaf = ?
        AND tipoFac != 'Nutricion'
        `;

        const [rows] = await pool.query(query, [fecha, horaf]);
        return rows;
    },
    deleteById: async (id) => {
        const query = "DELETE FROM citasFac WHERE _id = ?";
        const [result] = await pool.query(query, [id]);
        return result;
    },
    getOccupiedSlots: async (fecha) => {
        const query = "SELECT horaf, COUNT(*) as total FROM citasFac WHERE fecha = ? GROUP BY horaf";
        const [rows] = await pool.query(query, [fecha]);
        return rows;
    }
}