import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from './pages/profile/Profile.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home'
import Project_collection from './pages/projects/Project_list.jsx/Project_collection.jsx';
import CustomHeader from './components/header/CustomHeader.jsx';
import Project_details from './pages/projects/project_detail/Project_details.jsx';
import Admin_login from './admin/Admin_login.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import Admin_add from './admin/Admin_add.jsx';
import Add_user from './admin/Add_user.jsx';
function Router_page() {
    const location = useLocation();
    const hideNavbarRoutes = [
        '/project-collections',
        '/project-details',
        '/admin-and-users',
        '/admin-dashboard',
        '/add-admin',
        '/add-user',
    ];

    const hidefooterRoutes = [
        '/project-details',
        '/project-collections',
        '/admin-and-users',
        '/admin-dashboard',
        '/add-admin',
        '/add-user',
    ];

    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
    const shouldHideFooter = hidefooterRoutes.includes(location.pathname);
    return (
        <>
            {!shouldHideNavbar && <Header />}
            {shouldHideNavbar && <CustomHeader />}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/project-collections' element={<Project_collection />} />
                <Route path='/project-details' element={<Project_details />} />
                <Route path='/admin-and-users' element={<Admin_login />} />
                <Route path='/admin-dashboard' element={<AdminDashboard />} />
                <Route path='/add-admin' element={<Admin_add />} />
                <Route path='/add-user' element={<Add_user />} />
            </Routes>
            {!shouldHideFooter && <Footer />}
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