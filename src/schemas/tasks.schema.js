import { z } from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        invalid_type_error: 'El titulo debe ser un texto',
        required_error: 'El titulo es requerido'
    }).min(1, {
        message: 'El titulo debe tener al menos 1 caracter'
    }).max(255),

    description: z.string({
        invalid_type_error: 'La descripción debe ser un texto'
    }).min(1, {
        message: 'La descripción debe tener al menos 1 caracter'
    }).max(255).optional(),
})

export const updateTaskSchema = z.object({
    title: z.string({
        invalid_type_error: 'El titulo debe ser un texto',
    }).min(1, {
        message: 'El titulo debe tener al menos 1 caracter'
    }).max(255).optional(),

    description: z.string({
        invalid_type_error: 'La descripción debe ser un texto'
    }).min(1, {
        message: 'La descripción debe tener al menos 1 caracter'
    }).max(255).optional(),
})