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
                </div>
                <div className='md:order-1 flex flex-col text-center items-center justify-end '>
                    <h1 className='hidden md:block text-5xl heading-text text-blue-700'>Shiba Murmu</h1>
                    <p className='text-lg md:text-xl md:p-10 md:px-20'>
                        Hello, I'm Shiba Murmu, a passionate web developer with a knack for creating dynamic and user-friendly web applications. I love exploring new technologies and continuously improving my skills.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile