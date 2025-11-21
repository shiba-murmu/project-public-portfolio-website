import React from 'react'
import Heading_text from '../../components/Heading_text/Heading_text'
function About() {
    return (
        <>
            <div id='About' className='min-h-screen md:pl-50 flex flex-col justify-center md:justify-start items-center md:items-start text-3xl font-bold'>
                <div className=''>
                    <Heading_text text='About me' />
                </div>
                <div>
                    <section id="about" className="p-6 rounded-2xl" style={{ background: '' }}>
                        <div className="mt-3 md:flex md:flex-col md:gap-6">
                            <p
                                className="text-sm md:text-lg                                                                              md:flex-1 leading-relaxed"
                                
                            >
                                I'm <span className="font-extrabold heading-text text-xl md:text-2xl text-(--bluish)">Shiba Murmu</span> — a frontend engineer who loves building
                                clean, fast and intuitive web experiences. I started coding during my B.Tech in Computer
                                Science, and over time I found myself drawn toward creating polished user interfaces and
                                solving real user-experience problems.
                                <br /><br />
                                I enjoy working with <span className="font-semibold">React, Tailwind CSS, and Firebase</span>, and I’m always
                                exploring tools that help create smoother and more human-friendly digital products. My focus
                                is simple: build interfaces that are lightweight, responsive, and visually consistent —
                                without unnecessary complexity.
                                <br /><br />
                                Outside coding, I love drawing, exploring design trends, listening to music, and experimenting
                                with new ideas. I'm a fast learner, detail-oriented, and genuinely enjoy crafting things
                                from scratch.
                            </p>

                            <div className="mt-6 md:mt-0 md:w-64">
                                <h4 className="font-extrabold regular-bolder  text-md md:text-3xl mb-2">Quick Facts</h4>
                                <ul className="space-y-1 text-sm" style={{ color: 'var(--muted)' }}>
                                    <li>B.tech in Computer Science</li>

                                 
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default About