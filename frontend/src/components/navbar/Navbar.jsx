import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { publicRoutes, privateRoutes } from './navigation';

export function NavBar() {
    const { isAuth, signOut, user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>

            <nav className='bg-gray-900 flex items-center justify-between py-4 px-10'>
                <Link to={'/'}>
                    <h1 className='text-lg font-medium'>
                        PERN Tasks
                    </h1>
                </Link>

                <ul className='flex gap-5 items-center text-zinc-300'>

                    {isAuth ?
                        <>
                            {privateRoutes.map(item =>
                                <li className={`${location.pathname === item.path ? 'bg-sky-700 mx-2 px-2 py-0.5 rounded-sm duration-300' : ''}`}
                                    key={item.path}>

                                    <Link to={item.path} className='flex justify-center items-center gap-0.5'>
                                        {item.icon}
                                        <span className='hidden sm:block'>
                                            {item.name}
                                        </span>
                                    </Link>

                                </li>
                            )}

                            <li className='cursor-pointer' onClick={() => signOut()}>
                                Cerrar sesión
                            </li>
                            <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => navigate('/profile')}>
                                <img src={user.gravatar} alt='gravatar' className='rounded-full h-8' />
                                <p className='font-medium text-white'>{user.name}</p>
                            </li>
                        </>

                        : publicRoutes.map(item =>
                            <li className={location.pathname === item.path ? 'bg-sky-700 px-2 py-1 rounded-sm text-white' : ''}
                                key={item.path}>

                                <Link to={item.path}>
                                    {item.name}
                                </Link>

                            </li>
                        )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar