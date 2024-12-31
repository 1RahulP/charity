import Image from "next/image"

interface modalProps {
    children?: any,
    onClick?:any
}
const ModalBox = ({ children,onClick }: modalProps) => {
    return (
        <div className="bg-[#000000cc] fixed h-screen w-screen top-0 left-0 z-[4] p-4 grid">
            <div className="max-w-[500px] rounded-xl p-8 m-auto bg-white w-full relative">
                {children}
                <Image src={"svg/close.svg"} alt="close" width={20} height={20} className="absolute top-4 right-4 cursor-pointer" onClick={onClick} />
            </div>
        </div>
    )
}
export default ModalBox