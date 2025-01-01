import Image from "next/image"

const Team = ()=>{
    return(
        <div>
            <div className="bg-black relative">
                <Image src={"/jpg/team.avif"} alt="team" width={1650} height={850} className="w-full sm:h-[80vh] object-cover opacity-[0.7]" /> 
                <h2 className="text-white absolute top-[30%] text-center w-full sm:text-6xl text-2xl font-semibold">Our Organization Member</h2>
            </div>
            <div>
                <h3 className="sm:text-4xl text-primary-500 text-2xl px-2 text-center sm:mt-12 mt-6 font-semibold">Our Team Members</h3>
            <div className="sm:px-8 px-4 sm:py-16 py-4 grid sm:grid-cols-[1fr_1.5fr] items-center gap-8 max-w-[1250px] mx-auto">
                <div className="sm:block hidden">
                    <Image src={"/jpg/02.png"} alt="image" width={750} height={650} className="rounded-bl-[36px] rounded-tr-[36px] shadow-xl border-2 bg-green-100 p-2 border-green-500" />
                </div>
                <div>
                    <h3 className="font-semibold text-primary-500 sm:text-2xl text-lg sm:mb-0 mb-2">Nehat Khan</h3>
                    <div className="sm:hidden block">
                    <Image src={"/jpg/02.png"} alt="image" width={750} height={650} className="rounded-bl-[36px] rounded-tr-[36px] shadow-xl border-2 bg-green-100 p-2 border-green-500" />
                </div>
                    <p className="text-gray-500 mt-4 mb-2 sm:text-left text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem repellendus explicabo ad, culpa amet repudiandae architecto quam sunt illum mollitia impedit odio at laboriosam similique nemo non! Ducimus ad iure rem perspiciatis rerum.</p>
                    <p className="text-gray-500 sm:text-left text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem repellendus explicabo ad, culpa amet repudiandae architecto quam sunt illum mollitia impedit odio at laboriosam similique nemo non! Ducimus ad iure rem perspiciatis rerum.</p>
                </div>
            </div>
            <div className="sm:px-8 px-4 sm:py-16 py-4 grid sm:grid-cols-[1.5fr_1fr] items-center gap-8 max-w-[1250px] mx-auto">
               
                <div>
                    <h3 className="font-semibold text-primary-500 sm:text-2xl text-lg sm:mb-0 mb-2">Sahib Ali</h3>
                    <div className="sm:hidden block">
                    <Image src={"/jpg/03.jpg"} alt="image" width={750} height={650} className="rounded-bl-[36px] rounded-tr-[36px] shadow-xl border-2 bg-green-100 p-2 border-green-500" />
                </div>
                    <p className="text-gray-500 mt-4 mb-2 sm:text-left text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem repellendus explicabo ad, culpa amet repudiandae architecto quam sunt illum mollitia impedit odio at laboriosam similique nemo non! Ducimus ad iure rem perspiciatis rerum.</p>
                    <p className="text-gray-500 sm:text-left text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem repellendus explicabo ad, culpa amet repudiandae architecto quam sunt illum mollitia impedit odio at laboriosam similique nemo non! Ducimus ad iure rem perspiciatis rerum.</p>
                </div>
                <div className="sm:block hidden">
                    <Image src={"/jpg/03.jpg"} alt="image" width={750} height={650} className="rounded-bl-[36px] rounded-tr-[36px] shadow-xl border-2 bg-green-100 p-2 border-green-500" />
                </div>
            </div>
            </div>
        </div>
    )
}
export default Team