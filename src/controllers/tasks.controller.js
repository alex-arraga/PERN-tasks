// Do a CRUD using db
import { pool } from "../db.js";

// GET - All Tasks
export const getAllTasks = async (req, res) => {
    const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [req.userId]);
    return res.json(result.rows)
};

// GET - Unique Task
export const getTask = async (req, res) => {
    const id = req.params.id
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1 AND user_id = $2', [id, req.userId]);

    if (result.rowCount === 0) {
        res.status(404).json('La tarea no existe')
    } return res.json(result.rows[0])
};

// POST - Create New Task
export const createNewTask = async (req, res) => {
    const { title, description } = req.body;
    // DB Insert
    const result = await pool.query('INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *', [title, description, req.userId]
    );
    res.json(result.rows[0])
};

// PUT - Update Task
export const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    const result = await pool.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);

    if (result.rowCount === 0) {
        res.status(404).json('Tarea inexistente')
    } res.json(result.rows[0])
};

// DELETE - Delete Task
export const deleteTask = async (req, res) => {
    const id = req.params.id;
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    if (result.rowCount === 0) {
        res.status(404).json('La tarea no existe')
    }
    res.json('Tarea eliminada con exito')
};