import Router from 'express-promise-router';

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