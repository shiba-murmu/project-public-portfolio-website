import React from 'react'
import Project_card from '../../../components/project_card/Project_card'
import Project_card_desktop from '../../../components/project_card/Project_card_desktop'
function Project_collection() {
    return (
        <>
            <div className=' md:w-[170vh] min-h-screen flex flex-col justify-start md:justify-start items-center '>
                <div className='flex md:hidden mt-5   py-3 px-4  shadow-md  justify-center items-center'>
                    <span className='text-2xl md:text-5xl font-bold border-b-2 border-(--muted-text) '>Projects collection</span>
                </div>
                <div className='md:hidden'>

                    {/* For mobile  */}
                    <Project_card />
                    <Project_card />
                    <Project_card />

                </div>
                <div className='hidden md:flex md:flex-col md:gap-40 w-full py-10 '>
                    {/* Designed for desktop screen */}
                    {/* // image left (default) */}
                    <Project_card_desktop
                        path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                        title="Hotel Management System"
                        tech={["HTML", "CSS", "JavaScript"]}
                        description="A hotel management project with room booking, admin dashboard and responsive UI."
                    />

                    {/* // image right (reverse) */}
                    <Project_card_desktop
                        reverse
                        path="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                        title="Hotel Management System"
                        tech={["HTML", "CSS", "JavaScript"]}
                        description="A hotel management project with room booking, admin dashboard and responsive UI."
                    />


                </div>
            </div>
        </>
    )
}

export default Project_collection