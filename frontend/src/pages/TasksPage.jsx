import { useEffect } from 'react';
import TasksCard from '../components/tasks/TasksCard';
import { useTasks } from '../context/TasksContext';

function TasksPage() {
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks()
    }, [])

    if (tasks.length === 0) return (
        <div className='flex justify-center items-center w-full h-[calc(100vh-8rem)] bg-pink-700'>
            <h1 className='text-2xl font-medium opacity-20 select-none'>No hay tareas pendientes</h1>
        </div>
    )

    // Mapping 'task': Array, and order from highest to lowest
    return (
        <div className={
            `grid gap-3 mx-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5`}>

            {tasks.sort(((a, b) => b.id - a.id)).map(tasks =>
                <TasksCard task={tasks} key={tasks.id} />
            )}
        </div>
    )
}

export default TasksPage;