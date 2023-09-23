import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../context/authContext"
import { publicRoutes, privateRoutes } from "./navigation"

export function NavBar() {
    const { isAuth } = useAuth()
    const location = useLocation()
    console.log(isAuth)
    return (
        <nav className="bg-zinc-900 flex items-center justify-between py-4 px-10">
            <Link to={'/'}>
                <h1 className="text-lg font-medium">
                    PERN Tasks
                </h1>
            </Link>


            <ul className="flex gap-5 items-center text-zinc-300">
                {isAuth ? privateRoutes.map(item =>
                    <li className={`${location.pathname === item.path && "bg-sky-700 mx-2 px-2 py-0.5 rounded-sm duration-300"}`}
                        key={item.path}>

                        <Link to={item.path}>
                            {item.name}
                        </Link>

                    </li>
                )

                    : publicRoutes.map(item =>
                        <li className={location.pathname === item.path && 'bg-sky-700 px-2 py-1 rounded-sm text-white'}
                            key={item.path}>

                            <Link to={item.path}>
                                {item.name}
                            </Link>

                        </li>

                    )
                }
            </ul>
        </nav>
    )
}

export default NavBar