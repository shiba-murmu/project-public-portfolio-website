import React from 'react'

function ScrollToSection(id) {
    const el = document.getElementById(id);
    const header = document.getElementById('site-header');
    if (!el) return;
    const headerHeight = header ? header.offsetHeight: 0;
    const  top  = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: 'smooth'})

}


function Header() {
    return (
        <>
            <div id='site-header' className='sticky top-0 z-50 flex justify-between bg-(--bluish) items-center shadow-md'>
                <div className='py-3 md:py-4 pl-3 md:pl-15 text-white text-2xl heading-text'>Shiba Murmu</div>
                <div className='md:hidden py-3 pr-3 cursor-pointer'>
                    {/* size of this svg is 42 in google icons */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </div>
                <div className='hidden md:flex text-white space-x-8 p-4 text-lg'>
                    <div onClick={() => ScrollToSection('Home')} className='cursor-pointer'>Home</div>
                    <div onClick={() => ScrollToSection('About')} className='cursor-pointer'>About</div>
                    <div onClick={() => ScrollToSection('project')} className='cursor-pointer'>Projects</div>
                    <div onClick={() => ScrollToSection('Contact')} className='cursor-pointer'>Contact</div>
                </div>
            </div>
        </>
    )
}

export default Header