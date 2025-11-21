import React from 'react'
import Project_card from '../../../components/project_card/Project_card'

function Project_collection() {
  return (
   <>
    <div className='min-h-screen bg-(--about-bg) flex flex-col justify-start  items-center'>
        <div className='flex md:hidden mt-5 border-b-2 border-(--bluish) py-3 px-4 rounded-b-2xl shadow-md  justify-center items-center'>
            <span className='text-3xl md:text-5xl font-extrabold text-(--bluish)'>Projects collection</span>
        </div>
        <div className='md:hidden'>
            {/* For mobile  */}
            <Project_card />
            <Project_card />
            <Project_card />
        </div>
        <div>
            {/* Designed for desktop screen */}

        </div>
    </div>
   </>
  )
}

export default Project_collection