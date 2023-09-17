import { useAuth } from "../context/AuthContext"

function HomePage() {
    const data = useAuth()
    console.log(data)

    return (
        <div className='text-3xl font-medium'>Home Page</div>
    )
}

export default HomePage