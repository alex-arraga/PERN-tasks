import Card from "../Card"

export function TasksCard({ task }) {
    return (
        <div className="flex bg-zinc-800 justify-start rounded-md" key={task.id}>
            <Card className='grid gap-5 py-5 px-5 bg-transparent'>
                <h1 className='text-2xl font-semibold text-justify'>{task.title} </h1>
                <p className="text-zinc-400 text-justify">{task.description}</p>
            </Card>
        </div>
    )
}

export default TasksCard

