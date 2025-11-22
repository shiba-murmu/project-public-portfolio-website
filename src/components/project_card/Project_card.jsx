import React from 'react'
import { Link } from 'react-router-dom'
function Project_card() {
    // This is the components for the projects
    // Mobile view project card...
    return (
        <>
            <div className='md:hidden  h-[60vh]  rounded-md shadow-md m-4'>
                <div className='p-4 flex flex-col h-full'>
                    <h3 className='text-xl text-center font-bold mb-2'>Hotel management</h3>

                    <img
                        src="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                        className='h-40 w-full rounded-md'
                        alt=""
                    />

                    <div>
                        <span className='text-md font-bold'>Tech used : </span>
                        <ul className='flex gap-1 text-(--muted-text)'>
                            <li>Html,</li>
                            <li>CSS,</li>
                            <li>Javascript,</li>
                        </ul>
                    </div>

                    <div>
                        <span className='text-md font-bold'>Description : </span>
                        <p className='text-(--muted-text)'>Project description goes here</p>
                    </div>

                    {/* FOOTER BUTTONS */}
                    <div className=' flex justify-center items-center space-x-4 mt-auto pt-3 pb-3 rounded-md'>
                        <Link to='/project-details' className='bg-'>
                            <button className=' w-20 px-4 py-2 flex justify-center items-center rounded-md bg-(--button-background)'>Details</button>
                        </Link>
                        <button className=' bg-(--button-background) w-20  px-4 py-2 rounded-md'>Code</button>
                        <button className=' bg-(--button-background) w-20  px-4 py-2 rounded-md'>Live</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Project_card