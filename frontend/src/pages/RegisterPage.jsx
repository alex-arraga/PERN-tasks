import { Link } from "react-router-dom";
import { Button, Card, Input, Label } from "../components/ui/index.js";
import { useForm } from "react-hook-form"


function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSumbit = handleSubmit(async (data) => {
        console.log(data)
        const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const dataSignUp = await response.json()
        console.log(dataSignUp)
    });

    return (
        <div className="h-[calc(100vh-50px)] flex items-center justify-center">
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

                    {errors.name && <p className="text-red-300 text-xs">Por favor coloque su nombre</p>}

                    <Label htmlFor='lastname'>
                        Apellido
                    </Label>
                    <Input type='text' placeholder='Apellido'
                        {...register('lastname', { required: true })} />

                    {errors.lastname && <p className="text-red-300 text-xs">Por favor coloque su apellido</p>}

                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <Input type='email' placeholder='ejemplo@gmail.com'
                        {...register('email', { required: true })} />

                    {errors.email && <p className="text-red-300 text-xs">Por favor coloque su email</p>}

                    <Label htmlFor='password'>
                        Contraseña
                    </Label>
                    <Input type='password' placeholder='******'
                        {...register('password', { required: true })} />

                    {errors.password && <p className="text-red-300 text-xs">Por favor coloque contraseña</p>}

                    <Button>
                        Registrarse
                    </Button>

                    <div className='mt-10 flex gap-1'>
                        <p className='text-sm text-gray-300'>Ya estas registrado?</p> <Link className='text-sm font-medium text-gray-100' to='/login'>Ingresá</Link>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default RegisterPage;