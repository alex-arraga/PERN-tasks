// Aqui se definiran las rutas relacionadas a la autenticación, como login o register

import { Router } from "express";

const router = Router()

router.post('/signin', (req, res) => res.send('Ingresando'))

router.post('/signup', (req, res) => res.send('Registrando usuario'))

router.post('/signout', (req, res) => res.send('Cerrando sesion'))

router.get('/profile', (req, res) => res.send("Perfil del usuario"))

export default router