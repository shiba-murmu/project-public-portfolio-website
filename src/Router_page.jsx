import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile.jsx';
import Header from './components/header/Header.jsx';
function Router_page() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
        </>
    )
}

export default Router_page
