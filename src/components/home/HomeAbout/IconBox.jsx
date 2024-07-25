import React from 'react'
import { BsTools } from "react-icons/bs";
export default function IconBox({icon,title,desc}) {
  return (
    <div className='flex justify-start place-items-center group gap-4'>
          <div className="iconBox p-6 border  relative overflow-hidden flex justify-center place-items-center ">
              <div className="shade absolute -z-30 transition-all duration-700  bg-secondary w-[100%] h-0 group-hover:h-[130%] bottom-0 left-0 rounded-tl-3xl rounded-tr-3xl">
                  
              </div>
              <span className='text-3xl text-secondary transition-all duration-700 group-hover:scale-90 group-hover:text-white z-30 tex'>{icon }</span>
          </div>
          <div className="text">
              <div className="header lg:text-2xl md:text-xl text-base font-bold text-primary transition-all duration-700 hover:text-secondary">
                  {title}
              </div>
              <div className="desc lg:text-xl md:text-lg text-base text-darkShade">
                  {desc}
              </div>
          </div>
    </div>
  )
}
