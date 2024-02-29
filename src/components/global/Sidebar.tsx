import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { sideBarElements } from '../../data/sideBarElements';

const Sidebar = () => {
    const location = useLocation();
    const [isOppen, setIsOppen] = useState<boolean>(false);

    return (
        <>
            <aside
                // onMouseEnter={() => setIsOppen(true)}
                // onMouseLeave={() => setIsOppen(false)}
                className={`relative min-h-screen bg-gradient-to-tl from-[#041F50] to-darkestPurple2 ${isOppen ? "w-72" : "w-20  duration-200 "} duration-200 `}
            >
                <div className='text-white'>
                    profile
                </div>

                <nav className='w-full'>
                    <ul className='space-y-3 px-4'>
                        {sideBarElements.map((link) => (
                            <li key={link.id}>
                                <span className={`${isOppen ? "opacity-100" : "opacity-0"} duration-150 text-sm text-neutral-500 px-2`}>
                                    {link.title}
                                </span>
                                <ul className='space-y-1'>
                                    {link.listItems.map((listItem) => (
                                        <li key={listItem.id}>
                                            <Link
                                                to={listItem.url}
                                                className={`flex w-full gap-x-3 group duration-150 hover:bg-darkPurple/85  p-2 rounded-2xl drop-shadow ${isOppen ? "" : " justify-around"}${location.pathname === listItem.url ? " bg-darkPurple/85 " : ""}`}
                                            >
                                                <listItem.icon
                                                    className={` ${location.pathname === listItem.url ? "text-white " : " text-primaryBlue "} w-6 h-6 `}
                                                />
                                                <span className={`${isOppen ? "block" : "hidden"} text-white font-bold group-hover:translate-x-1 duration-150`}>
                                                    {listItem.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
