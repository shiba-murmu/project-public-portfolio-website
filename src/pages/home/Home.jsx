import React from 'react'
import Profile from '../profile/Profile'
import About from '../about/About'
import Contact from '../contact/Contact'
import Project from '../projects/Project'
function Home() {
    return (
        <>
            <div className='min-h-screen'>
                <Profile />
                <About />
                <Project />
                <Contact />
            </div>
        </>
    )
}

export default Home