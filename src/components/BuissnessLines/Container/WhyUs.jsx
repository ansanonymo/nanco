import React from 'react'
import { FaDiceSix } from 'react-icons/fa6'

export default function WhyUs({icon,title,desc}) {
    return (
        <div className=' p-5 bg-white relative cursor-pointer transition-all duration-500 hover:shadow-lg border group rounded-md'>
            <div className="iconBox w-full flex justify-start py-2">
                <div className='text-4xl  p-3 group-hover:rotate-180 transition-all duration-500  bg-secondary text-white rounded-md'>

                    {icon}
                </div>

            </div>
            <div className="textBox pt-3">
                <div className="title text-2xl font-bold text-primary">
                    {title}
                </div>
                <div className="parar text-sm pt-3 text-slate-600">
                    {desc}
                </div>
            </div>
        </div>
    )
}
