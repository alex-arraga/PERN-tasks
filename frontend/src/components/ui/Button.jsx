import { useNavigate } from 'react-router-dom';

export function Button({ children, style, className }) {

    const navigate = useNavigate()

    const handleClick = () => {
        if (style === 'cancel') {
            navigate('/tasks')
        }
    }

    return (
        <button
            onClick={() => handleClick()}
            className={style === 'cancel'
                ? 'relative bg-red-500 bg-opacity-70 inline-flex items-center gap-x-1.5 px-10 py-2 rounded-md text-white hover:bg-red-600 hover:outline-2 hover:ring-2 hover:ring-red-500 hover:outline-red-500 focus:bg-red-600 focus-visible:outline-2 focus:outline-red-500 focus:ring-2 focus:ring-red-400 duration-300 mt-5 disabled:cursor-not-allowed disabled:opacity-50 '
                : 'relative bg-indigo-500 bg-opacity-70 inline-flex items-center gap-x-1.5 px-10 py-2 rounded-md text-white hover:bg-indigo-600 hover:outline-2 hover:ring-2 hover:ring-blue-500 hover:outline-blue-500 focus:bg-indigo-600 focus-visible:outline-2 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 duration-300 mt-5 disabled:cursor-not-allowed disabled:opacity-50 ' + className}
        >
            {children}
        </button>
    )
}

export default Button