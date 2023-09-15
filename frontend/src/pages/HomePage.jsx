import { useAuth } from "../assets/context/authContext"

function HomePage() {
    const data = useAuth()
    console.log(data)

    return (
        <div className='text-3xl font-medium'>Home Page</div>
    )
}

export default HomePage