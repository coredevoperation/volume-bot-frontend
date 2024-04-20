const Button = (props) => {
    return <button className={`h-12 w-28 ${props.variant == 'danger' ? 'bg-red-900' : 'bg-blue-500'} rounded-lg text-white text-xl`} {...props}></button>
}

export { Button }