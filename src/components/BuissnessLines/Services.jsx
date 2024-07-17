import React from 'react'
import { BiSolidSchool } from "react-icons/bi";
export default function Services({icon,text,isRed}) {
  return (
    <div className={`w-full p-8 cursor-pointer  rounded-md ${!isRed?"bg-primary":"bg-secondary"} relative overflow-hidden`}>
      <div className="shade  flex justify-center translate-x-28  text-[100px] scale-150 opacity-30">
        {icon}
              
      </div>
      <div className='absolute flex w-full top-0 left-0 h-full justify-center place-items-center'> 
        <div className="title text-white text-xl ">
          {text}
       </div>
      </div>
      
    </div>
  )
}
