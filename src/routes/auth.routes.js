import Router from 'express-promise-router';

import {
    signIn,
    signUp,
    signOut,
    profile,
} from "../controllers/auth.controller.js"
import { isAuth } from '../middlewares/auth.middleware.js';
import { validateSchema } from '../middlewares/validate.middleware.js';
import { signInSchema, signUpSchema } from '../schemas/auth.schema.js';

const router = Router()

router.post('/signin', validateSchema(signInSchema), signIn)

router.post('/signup', validateSchema(signUpSchema), signUp)

router.post('/signout', signOut)

router.get('/profile', isAuth, profile)

export default router