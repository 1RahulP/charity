"use client"
import Image from "next/image"
import ThemeButton from "../theme-button/ThemeButton"
import React from "react"
import Link from "next/link"
import ModalBox from "../modal-box/modal-box"
import InputField from "../input-field/input-field"
import { useRouter } from "next/navigation"

const Header = () => {
    const [menu, setMenu] = React.useState(false)
    const [popUp, setPopUp] = React.useState(false)
    const router = useRouter();

    const handleScrollToContact = ()=>{
        const contactSection = document.getElementById("contact-form");
        if(contactSection){
            contactSection.scrollIntoView({behavior:"smooth"})
        }
    }
    
    return (
        <div className="sm:px-12 px-4 py-2 bg-[#ffffffc4] backdrop-blur-[29px] border-b sticky top-0 z-[3] relative">
            <div className="max-w-[1350px] mx-auto flex justify-between items-center">
                <div className="border rounded-full p-2 border-green-500 bg-white">
                    <Image src={"/svg/mosque.svg"} alt="mosque" width={52} height={52} className="m-auto sm:w-[52px] sm:h-[52px] w-[32px] h-[32px] cursor-pointer" onClick={()=>router.push("/")} />
                </div>
                <div>
                   
                </div>
                <div className="sm:flex hidden items-center gap-12">
                <ul className="text-[#0f5e1c] font-semibold font-sans flex gap-12 text-lg"> 
                        <li className="cursor-pointer" onClick={()=>router.push("/")}>Home</li>
                        <li className="cursor-pointer" onClick={()=>router.push("/team")}>Team</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer" onClick={handleScrollToContact}>Contact Us</li>
                    </ul>
                    <ThemeButton text="Donate" onClick={()=>setPopUp(true)} />
                </div>
                <div className="sm:hidden block">
                    {menu===false ?
                    <Image src={"/svg/menu.svg"} alt="menu" width={38} height={38} className="cursor-pointer" onClick={()=>setMenu(true)} />
                    :
                    <Image src={"/svg/close.svg"} alt="menu" width={20} height={20} className="cursor-pointer" onClick={()=>setMenu(false)} />
                    }
                </div>
            </div>
            {menu===true &&
                <div className="fixed grid items-center w-screen mt-2 left-0 h-[91.5vh] bg-[#083e08] backdrop-blur-[29px] text-white">
                    <ul className="h-[60%] grid justify-center">
                        <li className="h-fit m-auto">
                            <Link href={"/"} onClick={()=>setMenu(false)}>Home</Link>
                        </li>
                        <li className="h-fit m-auto">
                            <Link href={"/team"} onClick={()=>setMenu(false)}>Team</Link>
                        </li>
                        <li className="h-fit m-auto">
                            <Link href={"#"} onClick={()=>setMenu(false)}>About</Link>
                        </li>
                        <li className="h-fit m-auto">
                            <Link href={"/contact"} onClick={handleScrollToContact}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            }
            {popUp===true &&
              <ModalBox onClick={()=>setPopUp(false)}>
                <h2 className="font-seibold text-center text-lg">Please Enter Your Details</h2>
                <div className="grid gap-4 mt-6">
                  <InputField type={"text"} placeholder="Name" />
                  <InputField type={"number"} placeholder="Phone no." />
                  <InputField type={"email"} placeholder="Email address" />
                  <InputField type={"number"} placeholder="Amount" inputClassName={"w-fit"} />
                </div>
                <ThemeButton text="Submit" buttonClassName={"w-full mt-6"}  />
              </ModalBox>
            }
        </div>
    )
}
export default Header