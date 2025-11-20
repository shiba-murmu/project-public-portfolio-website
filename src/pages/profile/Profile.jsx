import React from 'react'

function Profile() {
    return (
        <>
            <div className='grid h-screen bg-(--bg-color) items-center  grid-col-2 md:grid-cols-2 md:gap-5 md:px-30 md:justify-center md:items-center p-10'>
                <div className='flex md:order-2 flex-col items-center '>
                    <div>
                        <img src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-3d-illustration-avatar-profile-man-png-image_9945226.png" alt="profile" className='rounded-md
                        h-40 w-40 md:h-80 md:w-80'/>
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-3xl md:text-4xl  md:hidden regular-bolder font-extrabold text-(--bluish)'>Shiba Murmu</h1>
                    </div>
                    <div className='md:hidden text-center mt-2'>
                        <h3 className='text-lg text-neutral-500'>Frontend Developer</h3>
                    </div>
                    <div className='md:hidden flex gap-5 mt-4 text-(--bluish) font-semibold'>
                        <div className='cursor-pointer bg-(--bluish) text-white px-4 py-2 rounded-md hover:bg-(--bluish) transition duration-300'>
                            View work
                        </div>
                        <div className='cursor-pointer text-black border px-4 py-2 rounded-md hover:bg-(--bluish) transition duration-300'>
                            Contact
                        </div>
                    </div>
                </div>
                <div className='md:order-1 flex md:pl-20 flex-col  justify-left items-start md:gap-4'>
                    <div>
                        {/* For desktop screen */}
                        <div className='hidden md:block text-5xl regular-bolder font-extrabold'>
                            Hi - I'm <span className='text-(--bluish)'>Shiba</span> <br />Murmu
                        </div>
                    </div>
                    <div>
                        <h3 className='hidden md:block text-2xl text-neutral-500 '>Frontend Developer</h3>
                    </div>
                    <div>
                        <p className='text-md md:text-lg text-center md:text-left max-w-xl'>
                            I build clean, fast, and accessible web experiences using React and Tailwind, Currently open to freelance and full-time opportunities. Let's connect!
                        </p>
                    </div>
                    <div className='hidden md:flex gap-5 mt-4 text-(--bluish) font-semibold'>
                        <div className='cursor-pointer bg-(--bluish) text-white px-4 py-2 rounded-md hover:bg-(--bluish) transition duration-300'>
                            View work
                        </div>
                        <div className='cursor-pointer text-black border border-gray-500 px-4 py-2 rounded-md hover:shadow-md  transition duration-300'>
                            Contact
                        </div>
                    </div>
                    <div className='mt-5 hidden md:block'>
                        <div className='flex flex-wrap gap-3'>
                            <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>Python</span>  
                            <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>JavaScript</span>  
                            <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>React</span>  
                            <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>Tailwind</span>  
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile