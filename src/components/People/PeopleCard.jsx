import React from 'react'
import image from "../../asset/People/image1.jpg"
import { FaFacebook, FaFacebookF } from 'react-icons/fa'
export default function PeopleCard({ image, name, title, links, email, phone }) {
    const linkData = links?.map(item => {
        return <a href={item?.link} className='p-3 rounded-full transition-all duration-500 hover:bg-white hover:text-secondary border block text-white border-white'>{item.icon }</a>
    })
  return (
    <div className='w-full lg:max-w-[300px] my-3 overflow-hidden group  flex flex-col bg-white rounded-lg '>
          <div className="imgBox overflow-hidden relative h-[70%] min-h-56">
              <div className="shade z-20 flex opacity-0 transition-all duration-500 group-hover:opacity-100 justify-center place-items-center absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.3)]">
                  <div className="icons flex gap-5 transition-all duration-500 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {linkData}
                  </div>
              </div>
              <img src={image} alt="People image" className='w-full h-full absolute group-hover:scale-110 transition-all duration-500 object-cover' />
          </div>
          <div className="textBox px-5 py-4">
              <div className="name text-xl pb-2 font-light">{name }</div>
              <div className="title text-sm pb-4 font-light">{title }</div>
              <div className='flex flex-col '>
                  <a href={`tel:${phone}`} className="title text-sm text-red-400 transition-all duration-300 hover:text-black cursor-pointer pb-1  ">{phone }</a>
                  <a href={`mailto:${email}`} className="title text-sm text-red-400 transition-all duration-300 hover:text-black cursor-pointer">{email }</a>
              </div>
              
              
          </div>
         
    </div>
  )
}
