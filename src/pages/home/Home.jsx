import React from 'react'
import Profile from '../profile/Profile'
import About from '../about/About'
import Contact from '../contact/Contact'
function Home() {
  return (
    <>
    <div className='min-h-screen'>
        <Profile />
        <About />
        <Contact />
    </div>
    </>
  )
}

export default Home