import React from 'react'

function Heading_text({ text }) {
    return (
        <>
            <div className=''>
                <span className='text-3xl md:text-5xl font-extrabold'>
                    {text}
                </span>
            </div>
        </>
    )
}

export default Heading_text;