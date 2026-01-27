import { pool } from "@/config/db";

export const citaModel = {
    getAll: async () => {
        const query = "SELECT * FROM citasBaq ORDER BY horab";
        const [rows] = await pool.query(query);
        // --- DEBUG: Esto saldrá en tu terminal negra ---
        console.log("--> Ejecutando Query getAll:", query);
        // -----------------------------------------------
        return rows;
    },
    create: async (citaData) => {
        const { _id, nombre, fecha, horab, tipoBaq, telefono } = citaData;
        const query = "INSERT INTO citasBaq SET ?";
        const [result] = await pool.query(query, { _id, nombre, fecha, horab, tipoBaq, telefono });
        return result;
    },

    getByDate: async (fecha) => {
        const query = "SELECT * FROM citasBaq WHERE fecha = ? ORDER BY horab";

        console.log("--> Ejecutando Query getByDate:", query, "Con fecha:", fecha);

        const [rows] = await pool.query(query, [fecha]);
        return rows;
    },
    getByDateAndSlot: async (fecha, horab) => {
        const query = `
        SELECT * FROM citasBaq
        WHERE fecha = ?
        AND horab = ?
        AND tipoBaq != 'Nutricion'
        `;

        const [rows] = await pool.query(query, [fecha, horab]);
        return rows;
    },
    deleteById: async (id) => {
        const query = "DELETE FROM citasBaq WHERE _id = ?";
        const [result] = await pool.query(query, [id]);
        return result;
    },
    getOccupiedSlots: async (fecha) => {
        const query = "SELECT horab, COUNT(*) as total FROM citasBaq WHERE fecha = ? GROUP BY horab";
        const [rows] = await pool.query(query, [fecha]);
        return rows;
    }
}
