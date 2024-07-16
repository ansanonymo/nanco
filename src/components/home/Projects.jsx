import React from 'react'
import ImageContainer from './Projects/ImageContainer'
import Title from '../common/Title'

export default function Projects() {
  return (
      <div className=' w-full'>
          <div className="container">
              <Title
                  first={"PRESTIGIOUS "}
                  last={"PROJECTS"}
              />
              <div className='flex justify-center text-xl text-center pb-12 text-darkShade'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <ImageContainer/>
          </div>
      
    </div>
  )
}
