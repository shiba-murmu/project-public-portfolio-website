import React from 'react'
import Heading_text from '../../components/Heading_text/Heading_text'
import { Link } from 'react-router-dom'
import Project_collection from './Project_list.jsx/Project_collection'
function Project() {
    return (
        <>
            <div id='project' className='min-h-screen pt-20 bg-(--about-bg) flex  justify-start items-start    flex-col'>
                <div className='w-full  md:w-full flex justify-center gap-4 items-center p-4 rounded-md'>
                    <Heading_text text='My work' />

                    <svg xmlns="http://www.w3.org/2000/svg" className='md:h-14 md:w-14' height="30px" viewBox="0 -960 960 960" width="30px" strokeWidth="30" fill='var(--bluish)'><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
                </div>

                <div className='hidden md:flex'>
                    <Project_collection />
                </div>


                {/* Below part is only used for mobile devices */}

                <div className='md:hidden w-full flex flex-col md:flex-row justify-center items-center'>
                    {/* Mobile device project cards */}
                    <div className='md:hidden  h-[60vh]  rounded-md shadow-md m-4'>
                        <div className='p-4 flex flex-col h-full'>
                            <h3 className='text-xl text-center font-bold mb-2'>Project Title</h3>

                            <img
                                src="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                                className='h-40 w-full rounded-md'
                                alt=""
                            />

                            <div>
                                <span className='text-md font-bold'>Tech used : </span>
                                <ul className='flex gap-1 text-(--bluish)'>
                                    <li>Html,</li>
                                    <li>CSS,</li>
                                    <li>Javascript,</li>
                                </ul>
                            </div>

                            <div>
                                <span className='text-md font-bold'>Description : </span>
                                <p className='text-gray-500'>Project description goes here</p>
                            </div>

                            {/* FOOTER BUTTONS */}
                            <div className=' flex justify-center items-center space-x-4 mt-auto pt-3 pb-3 rounded-md'>
                                <Link to='project-details'>
                                    <button className='bg-(--bluish) text-white px-4 py-2 rounded-md'>Details</button>
                                </Link>
                                <button className='bg-(--bluish) text-white px-4 py-2 rounded-md'>Code</button>
                                <button className='bg-(--bluish) text-white px-4 py-2 rounded-md'>Live</button>
                            </div>
                        </div>

                    </div>
                    <div className='md:hidden  h-[60vh]  rounded-md shadow-md m-4'>
                        <div className='p-4 flex flex-col h-full'>
                            <h3 className='text-xl text-center font-bold mb-2'>Project Title</h3>

                            <img
                                src="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                                className='h-40 w-full rounded-md'
                                alt=""
                            />

                            <div>
                                <span className='text-md font-bold'>Tech used : </span>
                                <ul className='flex gap-1 text-(--bluish)'>
                                    <li>Html,</li>
                                    <li>CSS,</li>
                                    <li>Javascript,</li>
                                </ul>
                            </div>

                            <div>
                                <span className='text-md font-bold'>Description : </span>
                                <p className='text-gray-500'>Project description goes here</p>
                            </div>

                            {/* FOOTER BUTTONS */}
                            <div className=' flex justify-center items-center space-x-4 mt-auto pt-3 pb-3 rounded-md'>
                                <Link to='project-details'>
                                    <button className='bg-(--bluish) text-white px-4 py-2 rounded-md'>Details</button>
                                </Link>
                                <button className='bg-(--bluish) text-white px-4 py-2 rounded-md'>Code</button>
                                <button className='bg-(--bluish) text-white px-4 py-2 rounded-md'>Live</button>
                            </div>
                        </div>

                    </div>
                    <Link to={'/project-collections'}>

                        <div className='md:hidden bg-(--bluish) px-10 py-3 flex justify-center items-center space-x-4 cursor-pointer text-2xl font-medium text-(--bluish-text) shadow-md rounded-md mt-10'>
                            <span className='text-xl'>More</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='h-6 w-6 animate-spin' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Project