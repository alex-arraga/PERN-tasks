import { createContext, useContext } from 'react';
import { useState } from 'react';
import {
    getAllTasksRequest,
    getTaskRequest,
    createTaskRequest,
    updateTaskRequest,
    deleteTaskRequest
} from '../api/tasks.api';

// Create tasks context
const TasksContext = createContext();

// Use provider
export const useTasks = () => {
    const context = useContext(TasksContext)
    if (!context) {
        throw new Error('useTasksProvider must be inside of TasksProvider')
    } return context
}

// Provider
export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const response = await getAllTasksRequest()
            .then(response => {
                setTasks(response)
            })
    }

    const loadTask = async (id) => {
        const response = await getTaskRequest(id)
            .then(response => {
                return response
            })
        return response
    }

    const createNewTask = async (task) => {
        const response = await createTaskRequest(task)
    }

    const updateTask = async (id, task) => {
        const response = await updateTaskRequest(id, task)
            .then(task => {
                return task
            })
        return response
    }

    const deleteTasks = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            setTasks(tasks.filter(tasks => tasks.id !== id))
            alert('Tarea eliminada exitosamente')
        } catch (error) {
            return console.log('Error: No se pudo eliminar la tarea')
        }
    }

    return (
        <TasksContext.Provider value={{
            tasks,
            loadTasks,
            loadTask,
            createNewTask,
            updateTask,
            deleteTasks
        }}>
            {children}
        </TasksContext.Provider>
    )
}
