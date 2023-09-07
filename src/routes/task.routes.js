// Aqui se definiran las rutas de todas las tareas

import { Router } from "express";
import {
    getAllTasks,
    createNewTask,
    deleteTask,
    getTask,
    updateTask
} from '../controllers/tasks.controller.js'

const router = Router();

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createNewTask)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)

// Debo importarlo en la app
export default router;