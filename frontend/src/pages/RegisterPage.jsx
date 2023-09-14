import React from "react";
import { Button, Card, Input } from "../components/ui/index.js";
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
        const dataSignup = await response.json()
        console.log(dataSignup)
    });

    return (
        <div className="h-[calc(100vh-50px)] flex items-center justify-center">
            <Card>
                <h3 className="text-2xl font-bold mb-5">Registro</h3>

                {/* Send Form */}
                <form onSubmit={onSumbit}>
                    <Input type='text' placeholder='Nombre'
                        {...register('name', { required: true })} />

                    {errors.name && <p className="text-red-300 text-xs">Por favor coloque su nombre</p>}

                    <Input type='text' placeholder='Apellido'
                        {...register('lastname', { required: true })} />

                    {errors.lastname && <p className="text-red-300 text-xs">Por favor coloque su apellido</p>}

                    <Input type='email' placeholder='ejemplo@gmail.com'
                        {...register('email', { required: true })} />

                    {errors.email && <p className="text-red-300 text-xs">Por favor coloque su email</p>}

                    <Input type='password' placeholder='******'
                        {...register('password', { required: true })} />

                    {errors.password && <p className="text-red-300 text-xs">Por favor coloque contraseña</p>}

                    <Button>
                        Registrarse
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default RegisterPage;