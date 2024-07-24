import React from 'react'
import ServiceBox from './ServiceBox'
import { FaHome } from 'react-icons/fa'

export default function SerivicesContainer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          <ServiceBox
              text={"RESIDENTIAL"}
              icon={<FaHome/>}
          />
          <ServiceBox
              text={"RESIDENTIAL"}
              icon={<FaHome />}
          />
          <ServiceBox
              text={"RESIDENTIAL"}
              icon={<FaHome />}
          />
          <ServiceBox
              text={"RESIDENTIAL"}
              icon={<FaHome />}
          />
          <ServiceBox
              text={"RESIDENTIAL"}
              icon={<FaHome />}
          />
          <ServiceBox
              text={"RESIDENTIAL"}
              icon={<FaHome />}
          />
         
    </div>
  )
}
