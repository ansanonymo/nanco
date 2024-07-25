import React from 'react'
import Details from './Details'
import { RiSmartphoneLine } from 'react-icons/ri'
import { IoMailOpen } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { FaArrowRight, FaMap } from 'react-icons/fa';
export default function DetailsBox() {
  return (
    <div className='bg-primary py-4 lg:py-0 w-full h-full flex flex-col justify-center place-items-center rounded-md'>
          <div className="div flex flex-col gap-3">
              <Details icon={<RiSmartphoneLine />} title={"Troll Free Number"} info={"+1 001-765-4321"} />
              <Details icon={<IoMailOpen />} title={"Send us an e-mail."} info={"office@example.com"} />
              <Details icon={<LuClock3 />} title={"Working Hours"} info={"Mon - Sat: 9:00 - 19:00"} />
              <Details />
      
          </div>
          <div className=' p-5 flex gap-4  border-t place-items-center '>
              <div className='text-3xl text-slate-400'>
                  <FaMap/>
              </div>
              <div className='flex gap-2 place-items-center text-white text-xl font-bold'>
                  Find Us on map <FaArrowRight/>
              </div>
          </div>
    </div>
  )
}
