import React from 'react'
import { FaClock, FaFacebookF, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Details() {
  return (
    <div className='w-full '>
          <div className="container">
              <div className="title flex justify-center lg:text-4xl md:text-3xl text-2xl font-semibold text-slate-800">
                  WE ARE IN LONDON, UK
              </div>
              <div className="conta flex flex-col md:flex-row gap-8 lg:flex-row justify-around py-14 place-items-center">
                  <div className="box flex flex-col justify-center place-items-center">
                      <div className="icon text-4xl text-secondary pb-5">
                          <FaLocationPin/>
                      </div>
                      <div className="desc text-center">
                          <p className='text-slate-500'>London 10</p>
                          <p className='text-slate-500'>Firs Avenue, Muswell Hill,</p>
                          <p className='text-sm flex place-items-center gap-2 text-secondary justify-center'>Map <IoIosArrowRoundForward/></p>
                      </div>
                  </div>
                  <div className="box flex flex-col justify-center place-items-center">
                      <div className="icon text-4xl text-secondary pb-5">
                          <FaPhone />
                      </div>
                      <div className="desc text-center">
                          <p className='text-slate-500'>London 10</p>
                          <p className='text-slate-500'>Firs Avenue, Muswell Hill,</p>
                          <p className='text-sm flex place-items-center gap-2 text-secondary justify-center'>Map <IoIosArrowRoundForward /></p>
                      </div>
                  </div>
                  <div className="box flex flex-col justify-center place-items-center">
                      <div className="icon text-4xl text-secondary pb-5">
                          <FaClock />
                      </div>
                      <div className="desc text-center">
                          <p className='text-slate-500'>London 10</p>
                          <p className='text-slate-500'>Firs Avenue, Muswell Hill,</p>
                          <p className='text-sm flex place-items-center gap-2 text-secondary justify-center'>Map <IoIosArrowRoundForward /></p>
                      </div>
                  </div>
              </div>
              <hr />
              <div className="social p-5 flex w-full justify-center place-items-center gap-10 text-slate-500 ">
                  <a href=""><FaFacebookF /></a>
                  <a href=""><FaTwitter /></a>
                  <a href=""><FaYoutube /></a>
              </div>
      </div>
    </div>
  )
}
