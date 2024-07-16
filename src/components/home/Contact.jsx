import React from 'react'
import { Form } from './Contact/Form'
import Details from './Contact/Details'
import Title from './Contact/Title'

export default function Contact() {
  return (
      <div className='w-full  bg-darkShade'>
          <Title/>
          <div className="container flex  md:flex-row lg:flex-row flex-col justify-center lg:place-items-start gap-6">
              <Form />
              <Details/>
      </div>
    </div>
  )
}
