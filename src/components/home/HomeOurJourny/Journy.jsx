import React from 'react'

export default function Journy({title,desc,side}) {
    return (
        <div className={`px-3 py-10 mt-10 flex ${side == "left" ? "border-l-4 justify-start" :"border-r-4 place-items-end"} flex-col gap-3  border-primary `}>
            <div className="title text-4xl font-semibold text-primary">
                {title}
            </div>
            <div className="desc text-2xl text-darkShade">
               {desc}
            </div>
        </div>
    )
}
