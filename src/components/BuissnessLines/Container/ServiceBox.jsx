import React from 'react'
import { FaHome } from 'react-icons/fa'

export default function ServiceBox({icon,text}) {
  return (
      <div className='w-full cursor-pointer relative transition-all duration-500 py-6 flex gap-4 flex-col group overflow-hidden rounded-md justify-center place-items-center bg-slate-200'>
          <div className="shade absolute w-[2%]  rotate-12 h-[200%] -translate-x-6 blur-sm group-hover:translate-x-[500px] transition-all duration-500  shadow shadow-white bg-white -top-10 left-0"></div>
          <div className="text-4xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg bg-white text-secondary p-2 rounded-md ">
              {icon}
          </div>
          <div className="title uppercase font-bold text-primary">
              {text}
      </div>
    </div>
  )
}
