import React from 'react'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Sidebar from './global/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout