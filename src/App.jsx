import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router_page from './Router_page.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <BrowserRouter>
            <Router_page />
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                theme='colored'
            />
        </BrowserRouter>
    )
}

export default App