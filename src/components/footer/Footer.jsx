import React from 'react'

function Footer() {
    return (
        <>
            <div id='Footer' className=' md:rounded-t-4xl md:flex md:flex-col md:gap-20 border-t border-(--border-color)  md:p-30 md:pb-10'>
                <div className='md:grid md:grid-cols-2 md:justify-center md:content-start'>
                    <div className='md:flex md:flex-col md:gap-3'>
                        <section className='md:flex md:flex-col md:gap-3'>
                            <span className='text-(--muted-text)'>CONTACT ME</span>
                            <span className='md:text-6xl'>
                                Let's Discuss  <br />  about   work
                            </span>
                        </section>
                        {/* Here one more section can be added to call the person directly */}
                        <section className='text-(--muted-text)'>
                            EMAIL ME AT
                        </section>
                        <section className='md:mt-4'>
                            <span className='border p-3 rounded-full px-10 border-dashed border-(--exception-button-border)'>shibamurmu001@gmail.com</span>
                        </section>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:justify-center md:content-start'>
                        <div>
                            <ul className='md:flex md:flex-col md:gap-2'>
                                <li className='text-(--muted-text)'>QUICK LINK</li>
                                <li>Home</li>
                                <li>About me</li>
                                <li>Projects</li>
                                <li>Technical skills</li>
                                <li>Experience</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='md:flex md:flex-col md:gap-2'>
                                <li className='text-(--muted-text)'>INFORMATION</li>
                                <li>Terms and service</li>
                                <li>Privacy policy</li>
                                <li>Cookie settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t border-(--border-color) text-(--muted-text) md:pt-10 md:grid md:grid-cols-2'>
                    {/* Other works and link of social media */}
                    <section className=''>
                        © PORTFOLIO 2025. ALL RIGHTS RESERVED
                    </section>
                    <section className=' md:flex md:justify-end'>
                        {/* Here we add social media links */}
                        laksdfj
                    </section>
                </div>
            </div>
        </>
    )
}

export default Footer