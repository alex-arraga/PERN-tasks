import React from 'react'

export function Button({ children }) {
    return (
        <button className='relative bg-indigo-400 inline-flex items-center gap-x-1.5 px-10 py-2 rounded-md text-white 
        
        hover:bg-indigo-500 hover:outline-2 hover:ring-2 hover:ring-blue-400 hover:outline-blue-400 
        
        focus:bg-indigo-500 focus-visible:outline-2 focus:outline-blue-400 focus:ring-2 focus:ring-blue-400 duration-300 mt-5 disabled:cursor-not-allowed disabled:opacity-50'

        >
            {children}
        </button>
    )
}

export default Button