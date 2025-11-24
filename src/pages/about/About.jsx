import React, { useState, useEffect } from 'react'
import Text from '../../components/customtext/Text'
function About() {
    const [name, setName] = useState('No name')
    const [lastName, setLastName] = useState(null)
    useEffect(() => {
        setName('Bhawna')
        setLastName('Chaudhary')
    })
    return (
        <>
            <div id='about' className='min-h-screen pt-5 md:pt-40 rounded-t-full  md:pl-50 flex flex-col justify-center md:justify-start items-left tems-start  font-semibold'>
                <div className="flex items-center px-5 gap-4 mb-2">
                    <div className="p-3 rounded-lg bg-(--button-background)  shadow-lg">
                        {/* simple badge icon */}
                        <svg width="28" height="28" viewBox="0 0 24 24" className='animate-spin' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--button-text-color)" />
                        </svg>
                    </div>

                    <div>
                        <Text text={'About me'} />
                        <p className="text-sm text-(--muted-text) mt-1">Who I am, how I work, and what I like to build.</p>
                    </div>
                </div>

                <div>
                    <section id="about" className="p-6 rounded-2xl" style={{ background: '' }}>
                        <div className="mt-3 md:flex md:flex-col md:gap-6">
                            <p
                                className="text-md md:text-lg text-(--muted-text)                                                                              md:flex-1  text-lefttext-left"

                            >
                                I'm <span className="font-extrabold text-md md:text-xl text-(--text-color)">{name} {lastName}</span> — a frontend engineer who loves building
                                clean, fast and intuitive web experiences. I started coding during my B.Tech in Computer
                                Science, and over time I found myself drawn toward creating polished user interfaces and
                                solving real user-experience problems.
                                <br /><br />
                                I enjoy working with <span className="font-extrabold text-md text-(--text-color)">React, Tailwind CSS, and Firebase</span>, and I’m always
                                exploring tools that help create smoother and more human-friendly digital products. My focus
                                is simple: build interfaces that are lightweight, responsive, and visually consistent —
                                without unnecessary complexity.
                                <br /><br />
                                Outside coding, I love drawing, exploring design trends, listening to music, and experimenting
                                with new ideas. I'm a fast learner, detail-oriented, and genuinely enjoy crafting things
                                from scratch.
                            </p>

                            <div className="mt-6 flex flex-col gap-2 justify-left -center md:justify-start md:items-start md:mt-0 md:w-full">
                                <h4 className="font-extrabold text-2xl md:text-3xl mb-2">Quick Facts</h4>
                                <div className='md:flex md:justify-center md:items-start'>
                                    <ol className=" text-(--muted-text) md:text-start list-inside space-y-1 text-md md:text-lg">
                                        <li>B.Tech in Computer Science</li>
                                        <li>2+ years of experience</li>
                                        <li>Passionate about UI/UX design</li>
                                        <li>Based in India</li>
                                        <li>Open to freelance & full-time work</li>
                                    </ol>
                                    <div className='md:flex md:justify-center md:items-center'>
                                        <ul className='text-md md:text-md font-normal flex flex-wrap gap-3 '>
                                            <li className='px-3 border bg-(--button-background) text-(--button-text-color) rounded-full'>React</li>
                                            <li className='px-3 border bg-(--button-background) text-(--button-text-color) rounded-full'>Tailwind CSS</li>
                                            <li className='px-3 border bg-(--button-background) text-(--button-text-color) rounded-full'>Git</li>
                                            <li className='px-3 border bg-(--button-background) text-(--button-text-color) rounded-full'>Firebase</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About

