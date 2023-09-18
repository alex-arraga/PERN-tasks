import Router from 'express-promise-router';

import {
    getAllTasks,
    createNewTask,
    deleteTask,
    getTask,
    updateTask
} from '../controllers/tasks.controller.js'
import { isAuth } from '../middlewares/auth.middleware.js';
import { validateSchema } from '../middlewares/validate.middleware.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/tasks.schema.js';

const router = Router();

router.get('/tasks', isAuth, getAllTasks)

router.get('/tasks/:id', isAuth, getTask)

router.post('/tasks', isAuth, validateSchema(createTaskSchema), createNewTask)

router.put('/tasks/:id', isAuth, validateSchema(updateTaskSchema), updateTask)

router.delete('/tasks/:id', isAuth, deleteTask)

export default router;