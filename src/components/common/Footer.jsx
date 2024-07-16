import React from 'react'
import image from "../../asset/Footer/footer.png"
import FooterContainer from '../Footer/FooterContainer'

function Footer() {
 
  return (
      <div className='w-full flex justify-center bg-darkShade  bg-cover' style={{backgroundImage:`url(${image})`}}>
        <FooterContainer/>
    </div>
  )
}

export default Footer
