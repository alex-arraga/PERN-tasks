import { pool } from '../db.js'
import bcrypt from 'bcrypt';
import { createAccessToken } from '../libs/jwt.js';

// Sign up
export const signUp = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        // Password encrypted
        const hashPassword = await bcrypt.hash(password, 10);

        const result = await pool.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashPassword]
        );

        // Create user Token 
        const token = await createAccessToken({ id: result.rows[0].id });

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

        next(error) // Handles the error if the name is not written
    }
};

// Sign in
export const signIn = async (req, res) => {
    const { email, password } = req.body;

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rowCount === 0) {
        return res.status(400).json({
            message: 'Correo electronico no registrado'
        })
    }

    // Encrypted password compare
    const validPassword = await bcrypt.compare(password, result.rows[0].password);

    if (!validPassword) {
        res.status(400).json({
            message: 'Contraseña incorrecta'
        })
    }

    // Create user Token
    const token = await createAccessToken({ id: result.rows[0].id });

    // Send token to frontend in a cookie
    res.cookie('token', token, {
        httpOnly: true,
        // secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return res.json(result.rows[0])
};

// Log out
export const logOut = (req, res) => {
    res.clearCookie('token');
    res.sendStatus(200);
};

// Profile
export const profile = async (req, res) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.userId]);
    return res.json(result.rows[0]);
};