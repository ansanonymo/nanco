import React from 'react'

export default function FooterLinkBox({ title, linkArray }) {
    const linkdata = linkArray?.map(item => {
        return <a className='block' href='#' key={crypto.randomUUID()}>{item?.text }</a>
    })
  return (
    <div className='flex justify-start flex-col'>
          <div>
              <h1 className='text-xl font-bold text-white'>{title}</h1>
          </div>
          <div className="links text-white font-light text-lg">
              {linkdata}
          </div>
    </div>
  )
}
