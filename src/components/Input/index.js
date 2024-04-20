const InputField = (props) => {
    return (
        <input
            className="h-12 flex-grow w-full shrink text-xl bg-slate-800 text-white solid border-white border-1 rounded-lg"
            {...props}
        />
    )
}

const InputLabel = (props) => {
    return (
        <div className="text-white text-xl pl-1 pr-2 text-nowrap" {...props}>
        </div>
    )
}

export { InputField, InputLabel }