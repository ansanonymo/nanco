import React from 'react'
import { FaArrowRight, FaBuilding } from 'react-icons/fa'

export default function Project({image,title,desc,date}) {
  return (
    <div className='flex flex-col cursor-pointer group relative min-h-36 w-full overflow-hidden rounded-md transition-all duration-200 place-items-center gap-2 group'>
      <div className="imageBox overflow-hidden relative w-full h-full top-0 left-0 rounded-md ">
        <img src={image} alt="" className='object-cover group-hover:scale-110 transition-all duration-300 ' />
        <div className="date  w-full translate-y-14 transition-all duration-500 group-hover:translate-y-0 px-5 py-3 absolute bottom-0 left-0 text-white bg-[rgba(0,0,0,0.4)]">
          { date}
        </div>
      </div>
      <div className="textBox w-full px-3 ">
        <div className="tite py-2 text-primary text-xl">
        {title}
        </div>
        <p className='text-slate-900 text-sm'>{desc }</p>
        </div>
    </div>
  )
}
