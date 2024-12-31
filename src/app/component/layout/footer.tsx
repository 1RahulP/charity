import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-green-100 sm:py-12 py-6 sm:px-8 px-4">
            <div className="max-w-[1250px] mx-auto grid sm:grid-cols-[1fr_2fr] gap-4">
                <div>
                    <div>
                        <Image src={"/svg/mosque.svg"} alt="mosque" width={52} height={52} />
                        <p className="text-sm text-[#455a64] mt-2 max-w-[280px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid assumenda neque dolorem modi</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 sm:gap-2 gap-6">
                    <div>
                        <h3 className="font-semibold pb-1 text-lg text-green-800">Quick Links</h3>
                        <span className="block w-12 h-[3px] bg-primary-500"></span>
                        <div className="grid gap-2 mt-4 text-[#455a64]">
                            <p className="text-sm">
                                <Link href={"#"}>About Us</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"#"}>Product Category</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"#"}>Our Products</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"#"}>How we do it</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold pb-1 text-green-800 text-lg">Useful Links</h3>
                        <span className="block w-12 h-[3px] bg-primary-500"></span>
                        <div className="grid gap-2 mt-4 text-[#455a64]">
                            <p className="text-sm">
                                <Link href={"#"}>Contact Us</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"#"}>Terms & Conditions</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"#"}>Privacy Policy</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"#"}>Cookies Policy</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold pb-1 text-lg text-green-800">Contact Us</h3>
                        <span className="block w-12 h-[3px] bg-primary-500"></span>
                        <div className="grid gap-2 mt-4 text-[#455a64]">
                            <p className="flex gap-2">
                                <Image src={"/svg/location.svg"} alt="location" width={24} height={24} className="flex-none w-[24px] h-[24px] mt-1" />
                                <span className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            </p>
                            <p className="flex gap-2">
                            <Image src={"/svg/phone.svg"} alt="location" width={24} height={24} className="flex-none w-[26px] h-[26px]" />
                                <span className="text-sm">+919999999999</span>
                            </p>
                            <p className="flex gap-2">
                            <Image src={"/svg/envelope.svg"} alt="location" width={20} height={20} className="flex-none w-[20px] h-[20px] ml-1" />
                            <span className="text-sm ml-1">xyz@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer