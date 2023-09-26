import { Card, Textarea, Input, Label, Button, ErrorMessage } from '../components/ui/index';
import { useForm } from 'react-hook-form';
import { createTaskRequest } from '../api/tasks.api'
import { useNavigate } from 'react-router-dom'

function TasksFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSumbit = handleSubmit(async (task) => {
        const res = await createTaskRequest(task)
        navigate('/tasks')
    })

    return (
        <div className='w-[calc(100vw-30rem)] h-max m-auto mt-5'>

            <Card>
                <h2 className='text-3xl mb-5'>Create new Task</h2>

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
                            Create new Task
                        </Button>
                    </div>
                </form>
            </Card>

        </div>
    )
}

export default TasksFormPage;