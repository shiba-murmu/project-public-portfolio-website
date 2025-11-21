import React from 'react'
import Heading_text from '../../components/Heading_text/Heading_text'
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" /></svg>

function Project() {
    return (
        <>
            <div id='project' className='min-h-screen pt-20 bg-(--about-bg) flex justify-center items-start text-4xl font-bold text-(--text-primary)'>
                <div className='w-full  md:w-full flex justify-center gap-4 items-center p-4 rounded-md'>
                    <Heading_text text='My work' />

                    <svg xmlns="http://www.w3.org/2000/svg" className='md:h-10 md:w-10' height="30px" viewBox="0 -960 960 960" width="30px" strokeWidth="30" fill='var(--bluish)'><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
                </div>


            </div>
        </>
    )
}

export default Project