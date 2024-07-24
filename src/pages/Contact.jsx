import React from 'react'
import GoogleMap from '../components/Contact/Map'
import Details from '../components/Contact/Details'
import HomeContact from "../components/home/Contact"


export default function Contact() {

  return (
    <div className=' w-full '>
       <GoogleMap/>
          <Details />
          <HomeContact/>
    </div>
  )
}
