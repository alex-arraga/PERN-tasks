import Card from '../ui/Card'
import { RxCrossCircled } from 'react-icons/rx'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { useTasks } from '../../context/TasksContext'

export function TasksCard({ task }) {

    const { deleteTasks } = useTasks()

    return (
        <Card className='grid gap-5 py-5 px-5' key={task.id}>
            <div className='flex justify-between items-start'>
                <h1 className='text-2xl font-semibold text-justify'>{task.title} </h1>
                <div className='flex gap-1.5 pl-10 py-2'>
                    <HiOutlinePencilSquare className='text-emerald-100 hover:text-green-500 focus:text-green-500 duration-500 cursor-pointer' />
                    <RxCrossCircled onClick={() => deleteTasks(task.id)} className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                </div>
            </div>
            <p className='text-zinc-400 text-justify'>{task.description}</p>
        </Card>
    )
}

export default TasksCard