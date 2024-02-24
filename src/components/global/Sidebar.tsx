import React from 'react'
import { sideBarElements } from '../../data/sideBarElements'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <>
            <aside className='absolute flex flex-col b-0 start-0 top-0 min-h-full bg-slate-950 w-56'>
                Sidebar
                <nav className=''>
                    <ul className='space-y-3'>
                        {
                            sideBarElements.map((link) => (
                                <li className="" key={link.id}>
                                    <span className="text-sm text-neutral-500">
                                        {link.title}
                                    </span>
                                    <ul className='space-y-1'>
                                        {link.listItems.map((listItem) => (
                                            <li className='hover:translate-x-1 duration-150'>
                                                <Link to={listItem.url}
                                                    className=""
                                                    key={listItem.id}
                                                >
                                                    <img src={listItem.icon} alt="" />
                                                    <span className="text-white font-bold">{listItem.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar