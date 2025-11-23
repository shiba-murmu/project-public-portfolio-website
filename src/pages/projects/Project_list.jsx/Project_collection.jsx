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
                    <Project_card_desktop orderOne={1} orderTwo={2} path='https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322' />
                    <Project_card_desktop orderOne={2} orderTwo={1} path='https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM=' />
                    <Project_card_desktop orderOne={1} orderTwo={2} path='https://media.istockphoto.com/id/669853862/photo/business-people-analyzing-statistics-financial-concept.jpg?s=612x612&w=0&k=20&c=FRwOQxlu-_1COd2i1eR3O8zscscesdhaXvUODzoVmFg=' />
                    <Project_card_desktop orderOne={2} orderTwo={1} path='https://waz.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg?bn=15100111939' />
                </div>
            </div>
        </>
    )
}

export default Project_collection