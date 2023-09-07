// Aqui se definiran las rutas de todas las tareas

import { Router } from "express";

const router = Router();

router.get('/tasks', (req, res) => { res.send('Obteniendo tareas') })

router.get('/tasks/:id', (req, res) => { res.send('Obteniendo tarea unica') })

router.post('/tasks', (req, res) => { res.send('Creando tarea') })

router.put('/tasks/:id', (req, res) => { res.send('Actualizando tarea') })

router.delete('/tasks/:id', (req, res) => { res.send('Eliminando tarea') })

// Debo importarlo en la app
export default router;