import { Card } from "../components/ui"
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className="h-[calc(100vh-50px)] flex justify-center items-center">
            <Card>
                <h1>Not Found</h1>
                <h3>404</h3>
                <div className="mt-6">
                    <Link to='/' className="text-black px-2.5 py-1 bg-blue-300 rounded-md">Volver al home</Link>
                </div>
            </Card>
        </div>
    )
}

export default NotFoundPage