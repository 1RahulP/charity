import Image from "next/image"
import ThemeButton from "./theme-button/ThemeButton"

const Header = () => {
    return (
        <div className="px-12 py-2 bg-gradient-to-r from-[#7adbe070] to-[#dcfce7] sticky top-0 z-[3]">
            <div className="max-w-[1350px] mx-auto flex justify-between items-center">
                <div className="border rounded-full p-2 border-green-500 bg-white">
                    <Image src={"/svg/mosque.svg"} alt="mosque" width={52} height={52} className="m-auto" />
                </div>
                <div>
                   
                </div>
                <div className="flex items-center gap-12">
                <ul className="text-[#0f5e1c] font-semibold font-sans flex gap-12 text-lg"> 
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Team</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Contact Us</li>
                    </ul>
                    <ThemeButton text="Donate" />
                </div>
            </div>
        </div>
    )
}
export default Header