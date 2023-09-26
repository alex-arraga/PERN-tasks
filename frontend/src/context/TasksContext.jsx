import { createContext, useContext } from 'react';
import { useState } from 'react';
import { deleteTaskRequest, getAllTasksRequest, createTaskRequest } from '../api/tasks.api';

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

    const createNewTask = async (task) => {
        const response = await createTaskRequest(task)
    }

    const loadTasks = async () => {
        const response = await getAllTasksRequest()
            .then(response => {
                setTasks(response)
            })
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
            deleteTasks,
            createNewTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}
