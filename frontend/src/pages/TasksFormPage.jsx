import { Card, Textarea, Input, Label, Button, ErrorMessage } from '../components/ui/index';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TasksContext'
import { useEffect } from 'react';


function TasksFormPage() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const { createNewTask, loadTask, updateTask } = useTasks()
    const params = useParams()

    // Send data to create a new task or upgrade a task
    const onSumbit = handleSubmit(async (data) => {
        let task;

        if (!params.id) {
            task = createNewTask(data)
        } else {
            task = updateTask(params.id, data)
        }

        if (task) {
            navigate('/tasks')
        }
    })

    // Get data of a task and edit them
    useEffect(() => {
        if (params.id) {
            loadTask(params.id)
                .then(task => {
                    setValue('title', task.title)
                    setValue('description', task.description)
                })
        }
    }, [])

    return (
        <div className='w-[calc(100vw-30rem)] h-max m-auto mt-5'>
            <Card>
                <h2 className='text-3xl mb-5'>
                    {params.id ? 'Editar tarea' : 'Crear nueva tarea'}
                </h2>

                <form onSubmit={onSumbit}>

                    <div className='my-5'>
                        <Label htmlFor='title'>Titulo</Label>
                        <Input type='text' placeholder='My new task'
                            {
                            ...register('title', {
                                required: true
                            })}
                        />
                        {errors.title && <ErrorMessage>Titulo requerido</ErrorMessage>}
                    </div>

                    <div className='my-5'>
                        <Label htmlFor='description'>Descripción</Label>
                        <Textarea placeholder='This is a description' rows={4}
                            {
                            ...register('description', {
                                required: true
                            })}
                        ></Textarea>
                        {errors.description && <ErrorMessage>Descripción requerida</ErrorMessage>}
                    </div>

                    <div className='flex justify-center gap-3'>
                        <Button style={'cancel'}>
                            Cancelar
                        </Button>
                        <Button>
                            {params.id ? 'Editar tarea' : 'Crear tarea'}
                        </Button>
                    </div>
                </form>
            </Card>

        </div>
    )
}

export default TasksFormPage;