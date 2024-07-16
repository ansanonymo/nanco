import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import girlIamge from "../../asset/About/girl.png"
export default function HomeAbout() {
  return (
    <div className='w-full'>
      <div className="container">
        <div className="textBox">
          <h1>
            Let's bulid something great
            together!
          </h1>
          <p>Don't wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.</p>
          <div>
            <button>Get Free Qutes <FaRegArrowAltCircleRight/> </button>
          </div>
        </div>
        <div className="imageBox">
    <img src={} alt="" />
        </div>
      </div>
    </div>
  )
}
