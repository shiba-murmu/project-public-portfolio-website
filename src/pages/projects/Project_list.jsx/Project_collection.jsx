import React from 'react'
import Project_card from '../../../components/project_card/Project_card'
import Project_card_desktop from '../../../components/project_card/Project_card_desktop'
import useAos from '../../../hooks/useAos' // added AOS hook import
import { aboutData, projects } from '../../../hooks/detailed_data'

function Project_collection() {
    // initialize AOS
    useAos({ duration: 700, easing: 'ease-out', once: true }, [])

    return (
        <>
            <div
                className=' md:w-[170vh] min-h-screen flex flex-col justify-start md:justify-start items-center '
                data-aos="fade-up"
                data-aos-delay="80"
            >
                <div
                    className='flex md:hidden mt-5   py-3 px-4  shadow-md  justify-center items-center'
                    data-aos="fade-right"
                    data-aos-delay="140"
                >
                    <span className='text-2xl md:text-5xl font-bold border-b-2 border-(--muted-text) '>Projects collection</span>
                </div>
                <div className='md:hidden'>

                    {/* For mobile  */}
                    <div data-aos="fade-up" data-aos-delay="180"><Project_card /></div>
                    <div data-aos="fade-up" data-aos-delay="260"><Project_card /></div>
                    <div data-aos="fade-up" data-aos-delay="340"><Project_card /></div>

                </div>
                <div className='hidden md:flex md:flex-col md:gap-40 w-full py-10 '>
                    {/* Designed for desktop screen */}
                    {/* // image left (default) */}
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={240 + index * 60}
                        >
                            <Project_card_desktop
                                reverse={index % 2 === 0}
                                path={project.image}
                                title={project.title}
                                tech={project.tech.split(", ")}
                                description={project.description}
                                code={project.code}
                                link={project.link}
                            />
                        </div>
                    ))}


                    

                    {/* // image right (reverse) */}
                  

                </div>
            </div>
        </>
    )
}

export default Project_collection
