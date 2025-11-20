import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home'
function Router_page() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
            <Footer />
        </>
    )
}

export default Router_page
