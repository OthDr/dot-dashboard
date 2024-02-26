import React, { useState } from 'react'
import { sideBarElements } from '../../data/sideBarElements'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [isOppen, setIsOppen] = useState<boolean>();

    const handleMenuToggle = () => {
        setIsOppen(prev => !prev);
    };

    return (
        <>
            <aside className={`relative min-h-screen bg-slate-900 ${isOppen ? "w-64" : "w-16"} duration-100 border-r border-slate-700`}>
                <div className='text-white'>
                    profile
                </div>
                <button
                    className={`${isOppen ? "bg-indigo-300" : "bg-indigo-500"}  absolute top-2 end-2 text-lime-500 text-lg  h-4 w-4 hover:rounded-md`}
                    onClick={handleMenuToggle}
                >

                </button>
                <nav className='w-full'>
                    <ul className='space-y-3 px-2'>
                        {
                            sideBarElements.map((link) => (
                                <li className="" key={link.id}>
                                    <span className={`${isOppen ? "opacity-100" : "opacity-0"} " duration-150 text-sm text-neutral-500 px-2"`}>
                                        {link.title}
                                    </span>
                                    <ul className='space-y-1'>
                                        {link.listItems.map((listItem) => (
                                            <li>
                                                <Link to={listItem.url}
                                                    className={`${isOppen ? "" : " justify-around"} " flex w-full gap-x-3 group duration-150 hover:bg-slate-800 py-1 px-2 rounded"`}
                                                    key={listItem.id}
                                                >
                                                    {/* <img src={listItem.icon} alt="" /> */}
                                                    <span className='text-slate-500'>X</span>
                                                    <span className={`${isOppen ? "block" : "hidden "} " text-white font-bold group-hover:translate-x-1 duration-150 "`}>
                                                        {listItem.title}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </aside >
        </>
    )
}

export default Sidebar