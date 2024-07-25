import React from 'react'
import WhyUs from './WhyUs'
import { MdOutlineDesignServices } from "react-icons/md";
export default function WhyusContainer() {
  return (
      <div className=' grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          
          <WhyUs
              icon={<MdOutlineDesignServices />}
              title={"Mordern Design"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta."}
          />
          <WhyUs
              icon={<MdOutlineDesignServices />}
              title={"Mordern Design"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta"}
          />
          <WhyUs
              icon={<MdOutlineDesignServices />}
              title={"Mordern Design"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta."}
          />
          <WhyUs
              icon={<MdOutlineDesignServices />}
              title={"Mordern Design"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta."}
          />
           <WhyUs
              icon={<MdOutlineDesignServices />}
              title={"Mordern Design"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta."}
          />
          <WhyUs
              icon={<MdOutlineDesignServices />}
              title={"Mordern Design"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta."}
          />

    </div>
  )
}
