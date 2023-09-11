import Router from 'express-promise-router';

import {
    signIn,
    signUp,
    logOut,
    profile
} from "../controllers/auth.controller.js"
import { isAuth } from '../middlewares/auth.middleware.js';

const router = Router()

router.post('/signin', signIn)

router.post('/signup', signUp)

router.post('/logout', logOut)

router.get('/profile', isAuth, profile)

export default router