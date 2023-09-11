import { pool } from '../db.js'
import bcrypt from 'bcrypt';
import { createAccessToken } from '../libs/jwt.js';

// Sign up
export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Password encrypted
        const hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword)

        const result = await pool.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashPassword]
        );

        // Create user Token 
        const token = await createAccessToken({ id: result.rows[0].id, user: result.rows[0].name });
        console.log(result);

        res.cookie('token', token, {
            httpOnly: true,
            // secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })

        return res.json(result.rows[0]);

    } catch (error) {
        if (error.code === "23505") {
            console.log(error)
            return res.status(400).send('El usuario ya existe')
        }
    }
};

// Sign in
export const signIn = (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)
    return res.send('Ingresando')
};

// Log out
export const logOut = (req, res) => res.send('Cerrando sesion');

// Profile
export const profile = (req, res) => {

};