interface inputProps{
    label?:string
    id?:any,
    type?:any,
    name?:string,
    placeholder?:string,
    inputClassName?:any
}
const InputField = ({label,id,type,name,placeholder,inputClassName}:inputProps)=>{
    return(
        <div>
            <label htmlFor={id} className={`block text-sm`}>
                {label}
            </label> 
            <input type={type} name={name} placeholder={placeholder} id={id} className={`w-full outline-none border rounded-md px-2 py-1 ${inputClassName}`} />
        </div>
    )
}
export default InputField