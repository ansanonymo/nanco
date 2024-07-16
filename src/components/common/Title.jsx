import React from 'react'

export default function Title({first,last}) {
    return (
        <div className='flex justify-center py-10'>
            <h1 className='lg:text-5xl text-3xl font-semibold text-primary px-10 py-5 uppercase border-b-4 border-dashed'><span className='text-darkShade'>{first}</span> {last}</h1>
        </div>
    )
}
