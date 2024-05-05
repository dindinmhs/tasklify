export function Button({type, bgColor, name, isPending}) {
    return(
        <div className="relative">
            <button disabled={isPending} className={`${bgColor} py-1 w-full rounded-full border-solid border-2 border-black active:-translate-x-1 active:translate-y-1 duration-200`} type={type}>{name}</button>
            <div className='bg-black top-0 right-0 left-0 bottom-0 -z-10 absolute rounded-full -translate-x-1 translate-y-1'></div>
        </div>
    )
}