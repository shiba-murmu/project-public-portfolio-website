import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile.jsx';
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

function Header() {
    return (
        <>
            <div>Header</div>
        </>
    )
}