import React from 'react'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Sidebar from './global/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {

    return (
        <div className='block h-screen'>
            <Navbar />
            <div className="h-[calc(100vh-96px)] flex items-start dashboard-bg p-2">
                <Sidebar />
                <div className="block w-full h-full bg-transparent overflow-y-scroll ">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;