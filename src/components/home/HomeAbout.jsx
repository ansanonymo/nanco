import React from 'react'
import truckImage from "../../asset/About/Truck.jpg"
import IconBox from './HomeAbout/IconBox'
import { BsTools } from 'react-icons/bs'
import { TbToolsKitchen2 } from "react-icons/tb";
export default function HomeAbout() {
  return (
    <div className="container">
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full h-full gap-6 justify-between'>
        <div className="imgBox w-full h-full relative overflow-hidden group min-h-72 lg:min-h-0 md:min-h-0">
          <div className="shade z-20 -rotate-45 absolute transition-all duration-1000 group-hover:translate-x-[50rem] group-hover:-translate-y-80 w-[30%] h-[200%] opacity-30 backdrop-blur-md shadow-lg shadow-white bg-white top-0 left-0 -translate-x-96">

          </div>
          <img src={truckImage} className=' absolute w-full h-full object-cover transition-all duration-1000 group-hover:scale-110' alt="Truck Image" />

        </div>
        <div className="text w-full p-6">
          <div className="small text-secondary">
            About Us
          </div>
          <div className="heading lg:text-6xl text-3xl py-3 font-bold text-primary md:text-4xl">
            We Are Specialized Solutions Building
          </div>
          <div className="p lg:text-xl text-sm flex flex-col gap-1 py-5 text-darkShade font-medium">
            <p>Content Marketing Solutions: Engage, Inform, and Convert</p>
            <p>Content Marketing Solutions: Engage, Inform, and Convert</p>
          </div>
          <div className="icon flex flex-col gap-5">
            <IconBox icon={<BsTools />}
              title={"Smart Analytics"}
              desc={"Content Marketing printing Solutions: Engage, Inform, and Convert"}
            />
            <IconBox
              icon={<TbToolsKitchen2 />}
              title={"Prestige Construction"}
              desc={"Content Marketing printing Solutions: Engage, Inform, and Convert"}

            
            />
          </div>
        </div>
      </div>
    </div>

  )
}
