import React from 'react'
import Project from './Project'
import image from "../../../asset/project-home/project-1.webp"

export default function ProjectContainer() {
  return (
    <div className='grid-cols-1 grid gap-9 justify-center place-items-center pt-5 md:grid-cols-2 lg:grid-cols-3 '>
      <Project
        image={image}
        title={"This is title"}
        date={new Date().toDateString()}
        desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum iusto! Quisquam, esse."}
      />
      <Project
        image={image}
        title={"This is title"}
        date={new Date().toDateString()}
        desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum iusto! Quisquam, esse."}
      />
      <Project
        image={image}
        title={"This is title"}
        date={new Date().toDateString()}
        desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum iusto! Quisquam, esse."}
      />
      <Project
        image={image}
        title={"This is title"}
        date={new Date().toDateString()}
        desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum iusto! Quisquam, esse."}
      />
      <Project
        image={image}
        title={"This is title"}
        date={new Date().toDateString()}
        desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum iusto! Quisquam, esse."}
      />

      <Project
        image={image}
        title={"This is title"}
        date={new Date().toDateString()}
        desc={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum iusto! Quisquam, esse."}
      />

    </div>
  )
}
