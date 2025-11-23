import React , { useState , useEffect} from 'react'
import Heading_text from '../../components/heading_text/Heading_text'
function About() {
    const [name , setName] = useState('No name')
    const [lastName , setLastName] = useState(null)
    useEffect(() => {
        setName('Bhawna')
        setLastName('Chaudhary')
    })
    return (
        <>
            <div id='About' className='min-h-screen pt-40 rounded-t-full  md:pl-50 flex flex-col justify-center md:justify-start items-center md:items-start text-3xl font-semibold'>
                <div className=''>
                    <Heading_text text='About me' />
                </div>
                
                <div>
                    <section id="about" className="p-6 rounded-2xl" style={{ background: '' }}>
                        <div className="mt-3 md:flex md:flex-col md:gap-6">
                            <p
                                className="text-sm md:text-lg text-(--muted-text)                                                                              md:flex-1 leading-relaxed text-center md:text-left"

                            >
                                I'm <span className="font-extrabold heading-text text-xl md:text-2xl text-(--text-color)">{name} {lastName}</span> — a frontend engineer who loves building
                                clean, fast and intuitive web experiences. I started coding during my B.Tech in Computer
                                Science, and over time I found myself drawn toward creating polished user interfaces and
                                solving real user-experience problems.
                                <br /><br />
                                I enjoy working with <span className="font-extrabold text-(--text-color)">React, Tailwind CSS, and Firebase</span>, and I’m always
                                exploring tools that help create smoother and more human-friendly digital products. My focus
                                is simple: build interfaces that are lightweight, responsive, and visually consistent —
                                without unnecessary complexity.
                                <br /><br />
                                Outside coding, I love drawing, exploring design trends, listening to music, and experimenting
                                with new ideas. I'm a fast learner, detail-oriented, and genuinely enjoy crafting things
                                from scratch.
                            </p>

                            <div className="mt-6 flex flex-col gap-2 justify-center items-center md:justify-start md:items-start md:mt-0 md:w-full">
                                <h4 className="font-extrabold text-md md:text-3xl mb-2">Quick Facts</h4>
                                <ol className=" text-(--muted-text) text-center md:text-start list-inside space-y-1 text-sm md:text-lg">
                                    <li>B.Tech in Computer Science</li>
                                    <li>2+ years of experience</li>
                                    <li>Passionate about UI/UX design</li>
                                    <li>Based in India</li>
                                    <li>Open to freelance & full-time work</li>
                                </ol>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About