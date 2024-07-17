import React from 'react'
import Services from './Services'
import { BiSolidSchool } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
export default function ServicesContainer() {
  return (
    <div className='container flex flex-col md:flex-row  lg:flex-row gap-5'>
      <Services
        icon={<BiSolidSchool />}
        text={"Prestigius Projects"}
        key={crypto.randomUUID()}
      />
      <Services
        icon={<FaRegHandshake />}
        text={"Why Us"}
        key={crypto.randomUUID()}
        isRed={true}
      />
      <Services
        icon={<IoSettingsOutline />}
        text={"Core Section"}
        key={crypto.randomUUID()}
      />
    </div>
  )
}
