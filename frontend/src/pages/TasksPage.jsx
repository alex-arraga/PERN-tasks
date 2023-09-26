import { useEffect, useState } from 'react';
import { getAllTasksRequest } from '../api/tasks.api';
import TasksCard from '../components/ui/tasks/TasksCard';

function TasksPage() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getAllTasksRequest()
            .then(response => {
                setTasks(response)
                console.log(response)
            })
    }, [])

    return (
        <div className='grid grid-cols-3 gap-5'>
            {tasks.reverse().map(tasks =>
                <TasksCard task={tasks} key={tasks.id} />
            )}
        </div>
    )
}

export default TasksPage;