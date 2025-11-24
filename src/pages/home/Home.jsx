import React from 'react'
import Profile from '../profile/Profile'
import About from '../about/About'
import Contact from '../contact/Contact'
import Project from '../projects/Project'
import Skills from '../skills/Skills'
import Education_experience from '../Education_experience/Education_experience'
import Education from '../educationDetails/Education'

function Home() {
    
    return (
        <>
            <div className="min-h-screen "> {/* add relative here */}
                <Profile />
                <About />
                <Project />
                <Skills />
                <Education_experience />
                <Education />
                {/* <Contact /> */}
            </div>
        </>
    )
}

export default Home