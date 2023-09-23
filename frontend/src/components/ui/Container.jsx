export function Container({ children, className }) {
    return (
        <div className={'h-[calc(100vh-7rem)] max-w-full px-10 py-4 mx-auto ' + className}>
            {children}
        </div>
    )
}

export default Container