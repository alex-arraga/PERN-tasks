import { Button, Card, ErrorMessage, Input, Label } from '../components/ui';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, frontendErrors } = useAuth();
    const navigate = useNavigate();

    const onSumbit = handleSubmit(async (data) => {
        const user = await signIn(data)
        if (user) {
            navigate('/profile')
        }
    })

    return (
        <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
            <Card className={''}>

                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold my-4 text-center'> Sign in</h1>
                </div>

                <form onSubmit={onSumbit}>
                    {/* Email input */}
                    <Label htmlFor='email'>
                        Ingrese su email
                    </Label>
                    <Input type='email' placeholder='email'
                        {...register('email', { required: true })} />
                    {errors.email && <ErrorMessage>Por favor ingrese su email</ErrorMessage>}

                    {/* Password input */}
                    <Label htmlFor='password'>
                        Ingrese su contraseña
                    </Label>
                    <Input type='password' placeholder='password'
                        {...register('password', { required: true })} />
                    {errors.password && <ErrorMessage>Por favor ingrese su contraseña</ErrorMessage>}


                    <div className='flex justify-center'>
                        <Button className='w-[calc(100%)] flex justify-center'>
                            Ingresar
                        </Button>
                    </div>
                </form>

                <div className='mt-10 flex justify-center gap-1'>
                    <p className='text-sm text-gray-300'>No estas registrado aún?</p> <Link className='text-sm font-medium text-gray-100' to='/signup'>Registrate</Link>
                </div>

                <div className='errors bg-red-900 mt-4 rounded-md'>
                    {frontendErrors && (frontendErrors.map(err =>
                        <p className='text-sm py-1 px-2 text-red-100'>
                            {'- ' + err}
                        </p>))
                    }
                </div>

            </Card>
        </div>
    )
}

export default LoginPage;