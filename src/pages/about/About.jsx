import React, { useState, useEffect } from 'react'
import Text from '../../components/customtext/Text'
import useAos from '../../hooks/useAos'
import { aboutData } from '../../hooks/detailed_data'

function About() {
    const [name, setName] = useState('No name')
    const [lastName, setLastName] = useState(null)

    // init AOS (keeps your previous hook usage)
    useAos({ duration: 800, easing: 'ease-out', once: true }, [])

    // run once
    useEffect(() => {
        setName('Bhawna')
        setLastName('Chaudhary')
    }, [])

    return (
        <>
            <div
                id="about"
                className="min-h-screen pt-5 md:pt-40 rounded-t-full md:pl-50 flex flex-col justify-center md:justify-start items-left tems-start font-semibold"
                data-aos="fade-up"
                data-aos-delay="80"
            >
                <div className="flex items-center px-5 gap-4 mb-2" data-aos="fade-right" data-aos-delay="140">
                    <div className="p-3 rounded-lg bg-(--button-background) shadow-lg" data-aos="zoom-in" data-aos-delay="180">
                        {/* simple badge icon */}
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            className="animate-spin"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                fill="var(--button-text-color)"
                            />
                        </svg>
                    </div>

                    <div>
                        <Text text={'About me'} />
                        <p className="text-sm text-(--muted-text) mt-1" data-aos="fade-left" data-aos-delay="220">
                            Who I am, how I work, and what I like to build.
                        </p>
                    </div>
                </div>

                <div>
                    <section id="about" className="p-6 rounded-2xl" style={{ background: '' }}>
                        <div className="mt-3 md:flex md:flex-col md:gap-6">
                            <p
                                className="text-md md:text-lg text-(--muted-text) md:flex-1 text-lefttext-left"
                                data-aos="fade-up"
                                data-aos-delay="260"
                            >
                                I'm{' '}
                                <span className="font-extrabold text-md md:text-xl text-(--text-color)">
                                    {name} {lastName}
                                </span>{' '}
                                {aboutData.description1}
                                <br />
                                <br />
                                I enjoy working with{' '}
                                <span className="font-extrabold text-md text-(--text-color)">{aboutData.working_tech.tech1}, {aboutData.working_tech.tech2}, {aboutData.working_tech.tech3}, and {aboutData.working_tech.tech4}</span>, and
                                {aboutData.description2}
                                <br />
                                <br />
                                {aboutData.description3}
                            </p>

                            <div
                                className="mt-6 flex flex-col gap-2 justify-left -center md:justify-start md:items-start md:mt-0 md:w-full"
                                data-aos="fade-up"
                                data-aos-delay="320"
                            >
                                <h4 className="font-extrabold text-2xl md:text-3xl mb-2" data-aos="fade-right" data-aos-delay="360">
                                    Quick Facts
                                </h4>

                                <div className="md:flex md:justify-center md:items-start">
                                    <ol className="text-(--muted-text) md:text-start list-inside space-y-1 text-md md:text-lg md:flex md:flex-col">
                                        {[
                                            aboutData.quick_fact.fact1,
                                            aboutData.quick_fact.fact2,
                                            aboutData.quick_fact.fact3,
                                            aboutData.quick_fact.fact4,
                                            aboutData.quick_fact.fact5,
                                        ].map((fact, i) => (
                                            <li
                                                key={fact}
                                                data-aos="fade-left"
                                                data-aos-delay={400 + i * 60}
                                                className="inline-block"
                                            >
                                                {fact}
                                            </li>
                                        ))}
                                    </ol>

                                    <div className="mt-4 md:mt-0 md:flex md:justify-center md:items-center" data-aos="zoom-in" data-aos-delay="520">
                                        <ul className="text-md md:text-md font-normal flex flex-wrap gap-3 ">
                                            {[aboutData.working_tech.tech1, aboutData.working_tech.tech2, aboutData.working_tech.tech3, aboutData.working_tech.tech4].map((tech, i) => (
                                                <li
                                                    key={tech}
                                                    className="px-3 border bg-(--button-background) text-(--button-text-color) rounded-full"
                                                    data-aos="fade-up"
                                                    data-aos-delay={540 + i * 70}
                                                >
                                                    {tech}
                                                </li>
                                            ))}
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
