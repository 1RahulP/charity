interface buttonProp{
    text?: string,
    buttonClassName?:any,
    parentClassName?:any,
    onClick?:any
}
const ThemeButton = ({text,buttonClassName,parentClassName,onClick}:buttonProp) =>{
    return(
        <div className={`${parentClassName}`}>
            <button className={`bg-primary-500 text-white font-semibold px-6 py-2 rounded-md ${buttonClassName}`}>{text}</button>
        </div>
    )
}
export default ThemeButton