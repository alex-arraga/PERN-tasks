import { Card, Textarea, Input, Label, Button, ErrorMessage } from '../components/ui/index';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TasksContext'
import { useEffect } from 'react';


function TasksFormPage() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const { createNewTask, loadTask } = useTasks()
    const params = useParams()

    // Send data of a new task
    const onSumbit = handleSubmit(async (task) => {
        createNewTask(task)
        navigate('/tasks')
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
                    {params.id ? 'Edit task' : 'Create new Task'}
                </h2>

                {/* Formulario */}
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
                            })
                            }
                        ></Textarea>
                        {errors.description && <ErrorMessage>Descripción requerida</ErrorMessage>}
                    </div>

                    <div className='flex justify-center'>
                        <Button>
                            {params.id ? 'Edit task' : 'Create new Task'}
                        </Button>
                    </div>
                </form>
            </Card>

        </div>
    )
}

export default TasksFormPage;