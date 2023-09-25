import { forwardRef } from 'react'

export const Textarea = forwardRef((props, ref) => {
    return (
        <textarea
            {...props}
            ref={ref}
            className='bg-zinc-600 px-3 py-2 block my-2 w-full rounded-md text-white focus:active:bg-zinc-800 focus:bg-zinc-800 focus:active:text-white focus:text-white box-border'
        >
            {props.children}
        </textarea>
    )
})

export default Textarea