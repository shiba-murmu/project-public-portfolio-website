import React from 'react'

function Profile() {
    return (
        <>
            <div id='Home' className='grid h-screen bg-(--bg-color) items-center mt-10 md:mt-0  grid-col-2 md:grid-cols-2 md:gap-5 md:px-30 md:justify-center md:items-center md:p-10 '>
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
                <div className='md:order-1  h-96 flex flex-col md:pl-20 md:flex-col  md:justify-left  md:gap-4'>
                    <div>
                        {/* For desktop screen */}
                        <div className='hidden md:block text-5xl regular-bolder font-extrabold'>
                            Hi - I'm <span className='text-(--bluish)'>Shiba</span> <br />Murmu
                        </div>
                    </div>
                    <div>
                        {/* Not visible to mobile */}
                        <h3 className='hidden md:block text-2xl text-neutral-500 '>Frontend Developer</h3>
                    </div>
                    <div>
                        <p className='text-md mt-10 md:mt-0 px-5 md:px-0 md:text-lg text-center md:text-left max-w-xl'>
                            I build clean, fast, and accessible web experiences using React and Tailwind, Currently open to freelance and full-time opportunities. Let's connect!
                        </p>
                    </div>
                    <div className='hidden md:flex gap-5 mt-4 text-(--bluish) font-semibold'>
                        {/* not visible to mobile */}
                        <div className='cursor-pointer bg-(--bluish) text-(--bluish-text) px-4 py-2 rounded-md hover:bg-(--bluish) transition duration-300'>
                            View work
                        </div>
                        <div className='cursor-pointer text-black border border-gray-500 px-4 py-2 rounded-md hover:shadow-md  transition duration-300'>
                            Contact
                        </div>
                    </div>
                    <div className='mt-5 hidden md:block'>
                        {/* not visible to mobile */}
                        <div className='flex flex-wrap gap-3'>
                            <span className='bg-(--bluish) text-(--bluish-text) px-3 py-1 rounded-full text-sm'>Python</span>
                            <span className='bg-(--bluish) text-(--bluish-text) px-3 py-1 rounded-full text-sm'>JavaScript</span>
                            <span className='bg-(--bluish) text-(--bluish-text) px-3 py-1 rounded-full text-sm'>React</span>
                            <span className='bg-(--bluish) text-(--bluish-text) px-3 py-1 rounded-full text-sm'>Tailwind</span>
                        </div>
                    </div>
                    <div className='mt-20 md:mt-10  flex flex-wrap md:justify-start gap-3 justify-center '>
                        {/* not visible to mobile */}
                        <h4 className="bg-(--bluish) text-md text-white px-5 py-3 rounded-md cursor-pointer 
               flex items-center gap-2">
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z" />
                            </svg>
                        </h4>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile

{/* <div className='hidden md:flex gap-5 mt-10'>
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" className='h-8 w-8 cursor-pointer hover:scale-110 transition duration-300'/>
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" className='h-8 w-8 cursor-pointer hover:scale-110 transition duration-300'/>
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" className='h-8 w-8 cursor-pointer hover:scale-110 transition duration-300'/>
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" className='h-8 w-8 cursor-pointer hover:scale-110 transition duration-300'/>
                        </div> */}