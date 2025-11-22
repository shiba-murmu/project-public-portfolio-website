import React from 'react'
import Profile from '../profile/Profile'
import About from '../about/About'
import Contact from '../contact/Contact'
import Project from '../projects/Project'
import Skills from '../skills/Skills'
function Home() {
    return (
        <>
            <div className='min-h-screen'>
                <Profile />
                <About />
                <Project />
                {/* Here skills component will be adding here. */}
                <Skills />
                <Contact />
            </div>
        </>
    )
}

export default Home