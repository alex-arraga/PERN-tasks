import { useEffect } from 'react';
import TasksCard from '../components/tasks/TasksCard';
import { useTasks } from '../context/TasksContext';

function TasksPage() {
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks()
    }, [])

    // Mapping 'task': Array, and order from highest to lowest
    return (
        <div className={'grid grid-cols-3 gap-5'}>
            {tasks.sort(((a, b) => b.id - a.id)).map(tasks =>
                <TasksCard task={tasks} key={tasks.id} />
            )}
        </div>
    )
}

export default TasksPage;