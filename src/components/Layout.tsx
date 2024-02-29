import React from 'react'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Sidebar from './global/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex bg-slate-900">
                <Sidebar />
                <div className="w-full bg-slate-700 dashboard-bg">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout