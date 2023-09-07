// Aqui se definiran las rutas relacionadas a la autenticación, como login o register

import { Router } from "express";
import {
    signIn,
    signUp,
    logOut,
    profile
} from "../controllers/auth.controller.js"

const router = Router()

router.post('/signin', signIn)

router.post('/signup', signUp)

router.post('/logout', logOut)

router.get('/profile', profile)

export default router