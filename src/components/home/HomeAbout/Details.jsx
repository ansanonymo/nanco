import React from 'react'
import { RiSmartphoneLine } from "react-icons/ri";
export default function Details({icon,title,info}) {
  return (
    <div className='flex  place-items-center gap-1'>
          <div className="icon  lg:text-5xl text-3xl text-secondary">
              {icon}
          </div>
          <div className="text text-xl flex justify-start flex-col place-items-start">
              <h1 className='text-white font-semibold lg:text-xl text-lg '>{title }</h1>
              <p className='text-secondary font-medium lg:text-xl text-base'>{info }</p>
          </div>
    </div>
  )
}
