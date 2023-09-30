import React from 'react'

export function Card({ children, className }) {
    return (
        <div className={` ${className}
        bg-zinc-900 rounded-md p-12 
        sm:w-[calc(100%-10rem)]
        md:w-[calc(100vw-25rem)]
        lg:w-[calc(100vw-43rem)]
        xl:w-[calc(100vw-72rem)]`}>
            {children}
        </div>
    )
}

export default Card


'sm:bg-blue-950'
'md:bg-green-900'
'lg:bg-pink-900'
'xl:bg-yellow-700'