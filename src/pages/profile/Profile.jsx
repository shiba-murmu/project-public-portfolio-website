import React from 'react'

function Profile() {
    return (
        <>
            <div className='grid h-screen  grid-col-2 md:grid-cols-2 md:gap-5 justify-center items-center p-10'>
                <div className='flex md:order-2 flex-col items-center '>
                    <div>
                        <img src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" alt="profile" className='rounded-full 
                        h-40 w-40 md:h-80 md:w-80' />
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-3xl md:text-4xl  md:hidden heading-text text-blue-600'>Shiba Murmu</h1>
                    </div>
                    <div className='md:hidden text-center mt-2'>
                        <h3 className='text-lg text-neutral-500'>Frontend Developer</h3>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/shiba-murmu-2b4b98210/" target="_blank" rel="noopener noreferrer">
                            <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                                Visit my LinkedIn
                            </button>
                        </a>
                    </div>
                </div>
                <div className='md:order-1 flex flex-col gap-4 text-center items-center justify-end '>
                    <div>
                        <h1 className='hidden md:block text-5xl heading-text text-blue-700'>Shiba Murmu</h1>
                    </div>
                    <div>
                        <h3 className='hidden md:block text-2xl text-neutral-500 '>Frontend Developer</h3>
                    </div>

                    <p className='text-lg md:text-xl md:px-20'>
                        Hello, I'm Shiba Murmu, a passionate web developer with a knack for creating dynamic and user-friendly web applications. I love exploring new technologies and continuously improving my skills.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile