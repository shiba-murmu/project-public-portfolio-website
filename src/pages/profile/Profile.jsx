import React from 'react'

function Profile() {
    return (
        <>
            <div className='grid h-screen bg-(--bg-color)  grid-col-2 md:grid-cols-2 md:gap-5 justify-center items-center p-10'>
                <div className='flex md:order-2 flex-col items-center '>
                    <div>
                        <img src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" alt="profile" className='rounded-full 
                        h-40 w-40 md:h-80 md:w-80' />
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-3xl md:text-4xl  md:hidden regular-bolder font-extrabold text-blue-600'>Shiba Murmu</h1>
                    </div>
                    <div className='md:hidden text-center mt-2'>
                        <h3 className='text-lg text-neutral-500'>Frontend Developer</h3>
                    </div>
                    <div className='md:hidden flex gap-5 mt-4 text-blue-500 font-semibold'>
                        <div className='cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                            View work
                        </div>
                        <div className='cursor-pointer text-black border px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                            Contact
                        </div>
                    </div>
                </div>
                <div className='md:order-1 flex md:pl-20 flex-col  justify-left items-left md:gap-4'>
                    <div>
                        {/* For desktop screen */}
                        <div className='hidden md:block text-5xl regular-bolder font-extrabold'>
                            Hi - I'm <span className='text-blue-600'>Shiba</span> <br />Murmu
                        </div>
                    </div>
                    <div>
                        <h3 className='hidden md:block text-2xl text-neutral-500 '>Frontend Developer</h3>
                    </div>
                    <div>
                        <p className='text-md md:text-lg text-justify md:text-left max-w-xl'>
                            I build clean, fast, and accessible web experiences using React and Tailwind, Currently open to freelance and full-time opportunities. Let's connect!
                        </p>
                    </div>
                    <div className='hidden md:flex gap-5 mt-4 text-blue-500 font-semibold'>
                        <div className='cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                            View work
                        </div>
                        <div className='cursor-pointer text-black border border-gray-500 px-4 py-2 rounded-md hover:shadow-md  transition duration-300'>
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile