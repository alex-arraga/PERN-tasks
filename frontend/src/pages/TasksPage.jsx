import { useEffect } from 'react';
import TasksCard from '../components/tasks/TasksCard';
import { useTasks } from '../context/TasksContext';

function TasksPage() {
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <div className='grid grid-cols-3 gap-5'>
            {tasks.map(tasks =>
                <TasksCard task={tasks} key={tasks.id} />
            )}
        </div>
    )
}

export default TasksPage;