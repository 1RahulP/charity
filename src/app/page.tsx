"use client"
import Image from "next/image";
import ThemeButton from "./component/theme-button/ThemeButton";
import React from "react";
import ModalBox from "./component/modal-box/modal-box";
import InputField from "./component/input-field/input-field";

export default function Home() {
  const [popUp, setPopUp] = React.useState(false)
  return (
    <>
      <div className="relative bg-black">
        <Image src={"/jpg/banner01.jpeg"} alt="banner" width={1850} height={950} className="w-full max-h-[80vh] object-cover opacity-[0.7]" />
        <div className="absolute sm:top-40 sm:top-20 top-8 z-[2] text-center w-full">
          <h2 className="sm:text-[42px] text-xl font-semibold mb-3 text-white">Welcome to Muslim Community Of India</h2>
          <p className="text-white max-w-[750px] sm:text-md text-sm mx-auto sm:mb-5 mb-2">Where empathy connects with unity. Join us in fostering love, faith, and transformative actions guided by the essence of Islamic giving.</p>
          <h2 className="font-semibold text-white sm:text-4xl text-xl sm:mb-8 mb-4">والسماء رفعها ووضع الميزان</h2>
          <ThemeButton text="Learn More" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 items-center px-4 sm:py-16 py-8 max-w-[1350px] mx-auto">
        <div className="max-w-[450px] mx-auto">
          <Image src={"/png/family.png"} alt="family" width={650} height={650} className="rounded-xl sm:block hidden" />
        </div>
        <div className="p-2">
          <h2 className="sm:text-xl font-semibold text-primary-500 sm:mb-6 mb-3">ABOUT US</h2>
          <h3 className="font-semibold sm:text-4xl text-2xl max-w-[650px] sm:mb-10 mb-6">Together, we can save more lives with your support.</h3>
          <Image src={"/png/family.png"} alt="family" width={650} height={650} className="rounded-xl sm:hidden block" />

          <p className="sm:my-2 mt-4 text-gray-400 sm:text-md text-sm">Welcome to the Muslim Community of India, a symbol of compassion guided by the values of Islamic charity. Here, we embrace the transformative impact of faith-inspired giving to create meaningful change in the lives of those in need.</p>
          <p className="text-gray-400 sm:text-md text-sm">Our mission is clear and impactful to uplift lives through kindness and generosity. Driven by the principles of compassion, fairness, and care, we aim to create a meaningful difference for individuals and communities, regardless of their race, faith, or background.</p>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold text-center text-primary-500 sm:mb-20 mb-8">Our Top Initiatives.</h2>
        <div className="grid sm:grid-cols-[1fr_2fr]">
          <div className="max-w-[300px]">
            <h2 className="sm:text-4xl text-2xl font-semibold mb-2 sm:text-left text-center">WE&apos;RE ON A <br className="sm:block hidden" /> <span className="text-primary-500"> MISSION</span> TO</h2>
            <p className="text-gray-400 sm:text-left text-center">solve the problems and reinvent charity for a new generation.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 sm:mt-0 m-4">
            {servicesArray?.map((items, index) => {
              return (
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
      <div className="px-4 sm:py-12 sm:mt-0 mt-6 max-w-[1150px] mx-auto max-w-[650px] gap-8 items-center">
        <div className="bg-green-100 p-4 rounded-xl h-fit">
          <h2 className="font-semibold">Support Us</h2>
          <h3 className="text-2xl mt-2 text-primary-500">We Need your help.</h3>
          <span className="block w-16 h-[3px] bg-primary-500"></span>
          <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptatum aliquam cumque esse sequi odio recusandae culpa deleniti? Non quasi facere sint possimus nesciunt minus quia harum accusantium enim molestiae obcaecati, error a explicabo veniam, id veritatis dolores minima adipisci. Dicta, exercitationem?</p>
          <ThemeButton text="Donate Now" buttonClassName={"text-sm !rounded-full mt-4"} onClick={()=>setPopUp(true)} />
        </div>
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
      <div className="max-w-[1150px] mx-auto px-4 py-12">
        <h2 className="font-semibold text-center">Our Expert</h2>
        <h3 className="text-2xl text-primary-500 text-center font-semibold">Islamic Scholars</h3>
        <p className="max-w-[600px] mx-auto text-xs text-center text-gray-400 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita harum totam sed eligendi magnam, laborum et assumenda est voluptatibus consequuntur cum illo?</p>
        <div className="grid sm:grid-cols-3 justify-center gap-6 max-w-[850px] mx-auto mt-10">
          <div>
            <Image src={"/jpg/01.avif"} alt="jpg" width={160} height={160} className="w-[220px] h-[220px] object-cover shadow-xl rounded-full border-b-2 border-green-800 p-[6px]" />
          </div>
          <div>
            <Image src={"/jpg/02.png"} alt="jpg" width={160} height={160} className="w-[220px] h-[220px] object-cover rounded-full shadow-xl border-b-2 border-green-800 p-[6px]" />
          </div>
          <div>
            <Image src={"/jpg/03.jpg"} alt="jpg" width={160} height={160} className="w-[220px] h-[220px] object-cover rounded-full shadow-xl border-b-2 border-green-800 p-[6px]" />
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto px-4 sm:py-12 grid sm:grid-cols-[1.3fr_1fr] items-center gap-12">
        <div>
          <h2 className="font-semibold text-xl pb-1">Upcoming <span className="text-primary-500"> Events</span></h2>
          <span className="block w-12 bg-primary-500 h-[2px]"></span>
          <p className="text-sm text-gray-400 max-w-[380px] mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse deleniti ratione corporis dignissimos facere.</p>
          <div className="grid sm:grid-cols-2 justify-center gap-4 mt-6">
            {eventArray?.map((item, index) => {
              return (
                <div key={index} className="max-w-[300px] shadow-xl rounded-md">
                  <Image src={item?.imageUrl} alt="image" width={220} height={180} className="w-full h-[180px] object-cover" />
                  <div className="p-2">
                    <p className="text-lg mb-2 font-semibold">{item?.title}</p>
                    <div className="flex justify-between text-xs font-semibold">
                      <p className="text-primary-500">{item?.date}</p>
                      <p className="text-gray-400 font-normal">{item?.time}</p>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">{item?.content}</p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-1"> <span className="text-primary-500">Prayer</span> Time</h2>
          <span className="w-10 h-[2px] bg-primary-500 block"></span>
          <div className="mt-4 shadow-xl sm:p-4 p-2 rounded-md">
            <div className="grid grid-cols-3 gap-2 border-b pb-2">
              <p className="font-semibold">Salat</p>
              <p className="font-semibold">Start</p>
              <p className="font-semibold">End</p>
            </div>
            {timingArray?.map((item,index)=>{
              return(

            <div className="grid grid-cols-3 gap-2 py-2 border-b text-sm" key={index}>
              <p className="text-primary-500 font-semibold">{item?.name}</p>
              <p>{item?.startTime}</p>
              <p>{item?.endTime}</p>
            </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto px-4 py-12">
        <h2 className=" text-center">What Our</h2>
        <div className="text-center">
        <h3 className="font-semibold pb-1 text-2xl text-primary-500 ">Donator Say</h3>
        <span className="block w-20 h-[3px] bg-primary-500 mx-auto"></span>
        </div>
        <div className="max-w-[600px] mx-auto border p-2 pt-12 mt-16 shadow-xl relative rounded-xl">
          <Image src={"/jpg/02.png"} alt="image" width={80} height={80} className="rounded-full w-[80px] h-[80px] absolute top-[-40px] p-1 border-2 border-green-500 bg-white left-0 right-0 mx-auto" />
          <h3 className="text-xl font-semibold text-center mb-2">Abu Adam Hassam</h3>
          <p className="text-sm text-center text-gray-400">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi laudantium, qui nam, ducimus, suscipit beatae saepe doloremque illum aut sed sit odit sint rem a exercitationem consectetur."</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 items-center gap-8 max-w-[1250px] mx-auto sm:py-16 py-8" id="contact-form">
        <div>
          <Image src={"/jpg/contact.jpg"} alt="image" width={400} height={400} className="sm:w-[400px] h-auto w-[240px]" />
        </div>
        <div>
          <form className="max-w-[500px] shadow-xl sm:p-6 p-4 rounded-xl sm:mx-0 mx-4">
            <h2 className="mb-6 font-semibold text-2xl text-center">Enter your details</h2>
            <div className="grid gap-4 ">
            <InputField type={"text"} placeholder="Full name" />
            <InputField type={"email"} placeholder="Email" />
            <InputField type={"number"} placeholder="Mobile no." />
            <textarea name="message" id="message" className="outline-none border rounded-md px-2 py-1" rows={4}></textarea>
            <ThemeButton text="Submit" buttonClassName={"w-full mt-2"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
const servicesArray = [
  {
    imageUrl: "/svg/quran.svg",
    alt: "quran",
    title: "Quran Learning",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },
  {
    imageUrl: "/svg/death.svg",
    alt: "funeral",
    title: "Funeral Service",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },
  {
    imageUrl: "/svg/mosque-development.svg",
    alt: "mosque",
    title: "Mosque Development",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },
  {
    imageUrl: "/svg/help.svg",
    alt: "help",
    title: "Help Poor's",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt nam necessitatibus repellendus, consectetur sint laborum."
  },

]
const eventArray = [
  {
    imageUrl: "/jpg/event01.jpg",
    title: "Islamic Teaching Event",
    date: "07/01/2025",
    time: "12:00 AM to 2:00 AM",
    content: "Central Mosque, New Town, Los Vegas, MuslimHub Center"
  },
  {
    imageUrl: "/jpg/event02.jpg",
    title: "Islamic Teaching Event",
    date: "07/01/2025",
    time: "12:00 AM to 2:00 AM",
    content: "Central Mosque, New Town, Los Vegas, MuslimHub Center"
  },
]
const timingArray = [
  {
    name:"Fajr",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
  {
    name:"Sunrise",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
  {
    name:"Zuhr",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
  {
    name:"Asr",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
  {
    name:"Maghrib",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
  {
    name:"Isha",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
  {
    name:"Jumuah",
    startTime:"3:58 am",
    endTime:"4:45 am"
  },
]