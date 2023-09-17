import { Button, Card, Input, Label } from '../components/ui';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onSumbit = handleSubmit(async (data) => {
        await signIn(data)
        navigate('/profile')
    })

    return (
        <div className='h-[calc(100vh-50px)] flex justify-center items-center'>
            <Card>
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
                    {errors.email && <p className='text-red-400 text-sm mb-2'>Por favor ingrese su email</p>}

                    {/* Password input */}
                    <Label htmlFor='password'>
                        Ingrese su contraseña
                    </Label>
                    <Input type='password' placeholder='password'
                        {...register('password', { required: true })} />
                    {errors.password && <p className='text-red-400 text-sm mb-2'>Por favor ingrese su contraseña</p>}


                    {/* Button */}
                    <Button>
                        Ingresar
                    </Button>

                    <div className='mt-10 flex gap-1'>
                        <p className='text-sm text-gray-300'>No estas registrado aún?</p> <Link className='text-sm font-medium text-gray-100' to='/signup'>Registrate</Link>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default LoginPage;