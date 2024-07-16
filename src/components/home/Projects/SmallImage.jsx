import React from 'react'
import project1 from "../../../asset/project-home/project-1.webp"

export default function SmallImage({ image }) {
    return (
        <div className={`w-full min-h-40 h-full relative overflow-hidden rounded-xl transition duration-1000 hover:scale-90 first:col-span-2 lg:first:col-span-1`}>
            <div className="textBox title flex justify-center absolute w-full transition h-full top-0 left-0 bg-gradient-to-b from-transparent to-black  opacity-0 hover:opacity-100 duration-1000">
                <div className=" absolute bottom-6 p-8 md:bottom-11 md:p-0 lg:bottom-11 lg:p-0">
                    <h1 className='text-white font-semibold text-sm md:text-xl lg:text-xl'>Lorem ipsum dolor</h1>
                    <p className='text-white text-xs md:text-sm lg:text-sm' >Lorem ipsum dolor sit amet, consectetur </p>
                </div>
            </div>
            <img src={image} alt="" className='object-cover w-full h-full' />
        </div>
    )
}
