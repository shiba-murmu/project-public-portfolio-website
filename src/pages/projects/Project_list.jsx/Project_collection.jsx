import React from 'react'
import Project_card from '../../../components/project_card/Project_card'
import Project_card_desktop from '../../../components/project_card/Project_card_desktop'
function Project_collection() {
  return (
   <>
    <div className=' md:w-[170vh] min-h-screen flex flex-col justify-start md:justify-start items-center '>
        <div className='flex md:hidden mt-5 border-b-2 border-(--bluish) py-3 px-4 rounded-b-2xl shadow-md  justify-center items-center'>
            <span className='text-3xl md:text-5xl font-extrabold text-(--bluish)'>Projects collection</span>
        </div>
        <div className='md:hidden'>
            {/* For mobile  */}
            <Project_card />
            <Project_card />
            <Project_card />
        </div>
        <div className='hidden md:flex md:flex-col md:gap-40 w-full py-10 '>
            {/* Designed for desktop screen */}
            <Project_card_desktop orderOne={1} orderTwo={2} path='https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322'/>
            <Project_card_desktop orderOne={2} orderTwo={1} path='https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322' />
        </div>
    </div>
   </>
  )
}

export default Project_collection