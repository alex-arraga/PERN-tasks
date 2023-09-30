export function Container({ children, className }) {
    return (
        <div className={'h-[calc(100%)] max-w-full my-24 mb-8 mx-8' + className}>
            {children}
        </div>
    )
}

export default Container