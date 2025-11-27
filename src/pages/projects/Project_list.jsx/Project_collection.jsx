import React from 'react'
import Project_card from '../../../components/project_card/Project_card'
import Project_card_desktop from '../../../components/project_card/Project_card_desktop'
import useAos from '../../../hooks/useAos' // added AOS hook import

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
                    <div data-aos="fade-up" data-aos-delay="180">
                        <Project_card_desktop
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift system"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="240">
                        <Project_card_desktop
                            reverse
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift system"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <Project_card_desktop
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift System"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="360">
                        <Project_card_desktop
                            reverse
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift System"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="420">
                        <Project_card_desktop
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift System"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="480">
                        <Project_card_desktop
                            reverse
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift System"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                    {/* // image right (reverse) */}
                    <div data-aos="fade-up" data-aos-delay="540">
                        <Project_card_desktop
                            path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                            title="Career Lift System"
                            tech={["HTML", "CSS", "JavaScript"]}
                            description="A hotel management project with room booking, admin dashboard and responsive UI."
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Project_collection
