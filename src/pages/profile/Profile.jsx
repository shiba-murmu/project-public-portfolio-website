import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function Profile() {
    const [name, setName] = useState('No name');
    const [lastName, setLastName] = useState(null);
    const [profession, setProfession] = useState('No profession');
    useEffect(() => {
        setName('Bhawna');
        setLastName('Chaudhary');
        setProfession('Developer');
    }, [])
    function ScrollToSection(id) {
    const el = document.getElementById(id);
    const header = document.getElementById("site-header");
    if (!el) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });

   
}
    return (
        <>
            <div id='home' className='grid h-screen items-center mt-10  md:mt-0  grid-col-2 md:grid-cols-2 md:gap-5 md:px-30 md:justify-center md:items-center md:p-10 '>
                <div className='flex md:order-2 flex-col items-center '>
                    <div>
                        <img src="https://images.unsplash.com/photo-1583391265517-35bbdad01209?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYmFja2dyb3VuZCUyMGdpcmx8ZW58MHx8MHx8fDA%3D" alt="profile" className='rounded-full
                        h-40 w-40 md:h-80 md:w-80 object-cover '/>
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='text-3xl   md:hidden  font-bold '>{name} {lastName}</h1>
                    </div>
                    <div className='md:hidden text-center mt-2'>
                        <h3 className='text-lg text-(--muted-text) '>{profession}</h3>
                    </div>
                    <div className='md:hidden flex gap-5 mt-4 font-semibold'>

                        <div onClick={() => ScrollToSection('project')} className='cursor-pointer bg-(--button-background)  px-4 py-2 rounded-md transition duration-300 text-(--button-text-color)'>
                            View work
                        </div>
                        <div onClick={() => ScrollToSection('contact')} className='cursor-pointer  border px-4 py-2 rounded-md border-(--border-color) text-(--button-text-color)  transition duration-300'>
                            Contact
                        </div>
                    </div>
                </div>
                <div className='md:order-1  h-96 flex flex-col md:pl-20 md:flex-col  md:justify-left  md:gap-4'>
                    <div>
                        {/* For desktop screen */}
                        <div className='hidden md:block text-5xl regular-bolder font-extrabold'>
                            Hi - I'm <span className=''>{name}</span> <br />{lastName}
                        </div>
                    </div>
                    <div>
                        {/* Not visible to mobile */}
                        <h3 className='hidden md:block text-(--muted-text) text-2xl '>{profession}</h3>
                    </div>
                    <div>
                        <p className='text-md mt-10 md:mt-0 px-5 md:px-0 md:text-lg text-center md:text-left max-w-xl text-(--muted-text)'>
                            I build clean, fast, and accessible web experiences using React and Tailwind, Currently open to freelance and full-time opportunities. Let's connect!
                        </p>
                    </div>
                    <div className='hidden md:flex gap-5 mt-4  font-semibold'>
                        {/* not visible to mobile */}
                        <div onClick={() => ScrollToSection('project')} className='cursor-pointer  px-4 py-2 rounded-md transition bg-(--button-background) text-(--button-text-color)  duration-300'>
                            View work
                        </div>
                        <div onClick={() => ScrollToSection('contact')} className='cursor-pointer  border px-4 py-2 rounded-md hover:shadow-md border-(--border-color) text-(--button-text-color) hover:bg-(--border-color)  transition duration-300'>
                            Contact
                        </div>
                    </div>
                    <div className='mt-5 hidden md:block'>
                        {/* not visible to mobile */}
                        <div className='flex flex-wrap gap-3'>
                            <span className=' bg-(--button-background) text-(--button-text-color) px-3 py-1 rounded-full text-sm'>Python</span>
                            <span className='bg-(--button-background) px-3 py-1 rounded-full text-sm text-(--button-text-color)'>JavaScript</span>
                            <span className='bg-(--button-background) px-3 py-1 rounded-full text-sm text-(--button-text-color)'>React</span>
                            <span className='bg-(--button-background) px-3 py-1 rounded-full text-sm text-(--button-text-color)'>Tailwind</span>
                        </div>
                    </div>
                    <div className='mt-20 md:mt-10  flex flex-wrap md:justify-start gap-3 justify-center '>
                        {/* not visible to mobile */}
                        <h4 className=" text-md px-5 py-3 rounded-md cursor-pointer 
               flex items-center bg-(--button-background) text-(--button-text-color) gap-2">
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z" />
                            </svg>
                        </h4>
                    </div>
                </div>
            </div >
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