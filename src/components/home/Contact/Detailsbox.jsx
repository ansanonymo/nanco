import React from 'react'
import { Link } from 'react-router-dom'
export default function Detailsbox({ icon, links }) {
    const data = links.map((item,index) => {
        return <div key={index}>{item?.text}</div>
    })

    return (
        <div className='flex place-items-center gap-3'>
            <div className='text-4xl text-primary'>
                {icon}
            </div>
            <div className='text-sm'>
                {data}
            </div>
        </div>
    )
}
