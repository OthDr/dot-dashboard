import React from 'react'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Sidebar from './global/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {

    return (
        <div className='block h-screen dashboard-bg '>
            <Navbar />
            <div className="max-w-[1920px] mx-auto h-[calc(100vh-72px)] flex items-start p-2">
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