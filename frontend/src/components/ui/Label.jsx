export function Label({ children, htmlFor }) {
    return (
        <label className='block text-sm font-medium text-gray-500' htmlFor={htmlFor}>
            {children}
        </label>
    )
}

export default Label