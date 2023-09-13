import React from 'react'

export function Button({ children }) {
    return (
        <button className='relative bg-indigo-400 inline-flex items-center gap-x-1.5 px-10 py-2 rounded-md text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2  duration-300 mt-5 disabled:cursor-not-allowed disabled:opacity-50'>
            {children}
        </button>
    )
}

export default Button