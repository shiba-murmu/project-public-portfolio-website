import React from 'react'
import Heading_text from '../../components/Heading_text/Heading_text'
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" /></svg>

function Project() {
    return (
        <>
            <div id='project' className='min-h-screen pt-10 md:pt-20  bg-amber-800 flex flex-col justify-start md:justify-start items-center md:items-start text-3xl font-semibold'>
                <div >
                    <Heading_text text='My work' />
                </div>
                <div>
                    {/* Projects cards here */}
                    <div className='grid grid-cols-1 bg-amber-500 md:grid-cols-5 gap-4'>
                        {/* Map through your projects and create a card for each */}
                        <div className='bg-white p-4 rounded-lg shadow-md w-full h-48'>
                            <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                            <p className='text-sm'>Brief description of the project.</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow-md w-full h-48'>
                            <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                            <p className='text-sm'>Brief description of the project.</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow-md w-full h-48'>
                            <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                            <p className='text-sm'>Brief description of the project.</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow-md w-full h-48'>
                            <h3 className='text-xl font-bold mb-2'>Project Title</h3>
                            <p className='text-sm'>Brief description of the project.</p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* More content if needed */}
                </div>
            </div>
        </>
    )
}

export default Project