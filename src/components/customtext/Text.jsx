import React from 'react'

function Text({text}) {
    return (

        <>
            <div className=''>
                <span className='text-2xl text-center  md:text-5xl font-extrabold'>
                    {text}
                </span>
            </div>
        </>
    )
}


export default Text