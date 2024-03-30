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
                <main className="block w-full g-transparent overflow-auto animate-slowfade2 h-[calc(100vh-89px)] ">
                    <div className='px-2 lg:px-4 w-full h-full rounded-lg '>
                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;