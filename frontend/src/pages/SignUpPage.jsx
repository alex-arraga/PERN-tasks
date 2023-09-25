import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, ErrorMessage, Input, Label } from '../components/ui/index.js';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';

function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signUp, frontendErrors } = useAuth()
    const navigate = useNavigate()

    const onSumbit = handleSubmit(async (data) => {
        const user = await signUp(data)
        if (user) {
            navigate('/signin')
        }
    });

    return (
        <div className="h-[calc(100vh-7rem)] flex items-center justify-center">
            <Card>
                <div className="flex justify-center">
                    <h3 className="text-4xl font-bold mb-5">Sign up</h3>
                </div>

                {/* Send Form */}
                <form onSubmit={onSumbit}>
                    <Label htmlFor='name'>
                        Nombre
                    </Label>
                    <Input type='text' placeholder='Nombre'
                        {...register('name', { required: true })} />
                    {errors.name && <ErrorMessage>Por favor ingrese su nombre</ErrorMessage>}

                    <Label htmlFor='lastname'>
                        Apellido
                    </Label>
                    <Input type='text' placeholder='Apellido'
                        {...register('lastname', { required: true })} />
                    {errors.lastname && <ErrorMessage>Por favor ingrese su apellido</ErrorMessage>}

                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <Input type='email' placeholder='ejemplo@gmail.com'
                        {...register('email', { required: true })} />
                    {errors.email && <ErrorMessage>Por favor ingrese su email</ErrorMessage>}

                    <Label htmlFor='password'>
                        Contraseña
                    </Label>
                    <Input type='password' placeholder='******'
                        {...register('password', { required: true })} />
                    {errors.password && <ErrorMessage>Por favor ingrese contraseña</ErrorMessage>}

                    <Button>
                        Registrarse
                    </Button>
                </form>

                <div className='mt-10 flex gap-1'>
                    <p className='text-sm text-gray-300'>Ya estas registrado?</p> <Link className='text-sm font-medium text-gray-100' to='/signin'>Ingresá</Link>
                </div>

                <div className='errors bg-red-900 mt-4 rounded-md'>
                    {frontendErrors && (frontendErrors.map(err =>
                        <p className='text-sm py-1 px-2 text-red-100'>
                            {'- ' + err}
                        </p>)
                    )}
                </div>

            </Card>
        </div>
    )
}

export default RegisterPage;