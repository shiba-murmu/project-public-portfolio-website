import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from './pages/profile/Profile.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home'
import Project_collection from './pages/projects/Project_list.jsx/Project_collection.jsx';
import CustomHeader from './components/header/CustomHeader.jsx';
import Project_details from './pages/projects/project_detail/Project_details.jsx';
function Router_page() {
    const location = useLocation();
    const hideNavbarRoutes = ['/project-collections'];

    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
    return (
        <>
            {!shouldHideNavbar && <Header />}
            {shouldHideNavbar && <CustomHeader />}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/project-collections' element={<Project_collection />} />
                <Route path='/project-details' element={<Project_details />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Router_page

function ScrollToTop() {
    const location = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return null;
}