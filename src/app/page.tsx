import Image from "next/image";
import ThemeButton from "./component/layout/theme-button/ThemeButton";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#006400]">
        <Image src={"/jpg/banner.jpg"} alt="banner" width={1850} height={950} className="w-full h-auto opacity-[0.7]" />
        <div className="absolute top-40 z-[2] text-center w-full">
          <h2 className="sm:text-[42px] font-semibold mb-3 text-white">Welcome to Muslim Community Of India</h2>
          <p className="text-white max-w-[750px] mx-auto mb-5">Where empathy connects with unity. Join us in fostering love, faith, and transformative actions guided by the essence of Islamic giving.</p>
          <h2 className="font-semibold text-white text-4xl mb-8">والسماء رفعها ووضع الميزان</h2>
          <ThemeButton text="Learn More" />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center px-4 py-16 max-w-[1350px] mx-auto">
        <div className="max-w-[450px] mx-auto">
          <Image src={"/png/family.png"} alt="family" width={650} height={650} className="rounded-xl" />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold text-primary-500 mb-6">ABOUT US</h2>
          <h3 className="font-semibold text-4xl max-w-[650px] mb-10">Together, we can save more lives with your support.</h3>
          <p className="my-2 text-gray-400">Welcome to the Muslim Community of India, a symbol of compassion guided by the values of Islamic charity. Here, we embrace the transformative impact of faith-inspired giving to create meaningful change in the lives of those in need.</p>
          <p className="text-gray-400">Our mission is clear and impactful to uplift lives through kindness and generosity. Driven by the principles of compassion, fairness, and care, we aim to create a meaningful difference for individuals and communities, regardless of their race, faith, or background.</p>
        </div>
      </div>
      <div className="px-4 py-12 max-w-[1150px] mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center text-primary-500 mb-20">Our Top Initiatives.</h2>
        <div className="grid grid-cols-[1fr_2fr]">
          <div className="max-w-[300px]">
            <h2 className="text-4xl font-semibold mb-2">WE&apos;RE ON A <br /> <span className="text-primary-500"> MISSION</span> TO</h2>
            <p className="text-gray-400">solve the problems and reinvent charity for a new generation.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {servicesArray?.map((items,index)=>{
              return(
                <div key={index} className="flex gap-4">
                  <div className="flex-none">
                    <Image src={items?.imageUrl} alt={items?.alt} width={36} height={36} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{items?.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{items?.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
const servicesArray = [
  {
    imageUrl:"/svg/quran.svg",
    alt:"quran",
    title:"Quran Learning",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },
  {
    imageUrl:"/svg/death.svg",
    alt:"funeral",
    title:"Funeral Service",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },
  {
    imageUrl:"/svg/mosque-development.svg",
    alt:"mosque",
    title:"Mosque Development",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },
  {
    imageUrl:"/svg/help.svg",
    alt:"help",
    title:"Help Poor's",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },

]