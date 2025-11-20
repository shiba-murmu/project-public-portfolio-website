import React from 'react'

function Header() {
    return (
        <>
            <div className='flex justify-between bg-blue-600 items-center shadow-md'>
                <div className='py-3 md:py-4 pl-3 md:pl-15 text-white text-2xl font-MomoSignature'>Shiba Murmu</div>
                <div className='md:hidden py-3 pr-3 cursor-pointer'>
                    {/* size of this svg is 42 in google icons */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </div>
                <div className='hidden md:flex text-white space-x-8 p-4 text-lg'>
                    <div className='cursor-pointer'>Home</div>
                    <div className='cursor-pointer'>About</div>
                    <div className='cursor-pointer'>Contact</div>
                </div>
            </div>
        </>
    )
}

export default Header