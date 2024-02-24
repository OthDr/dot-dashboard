import React from 'react'

const Sidebar = () => {

    return (
        <>
            <aside className='absolute b-0 start-0 top-0 min-h-full bg-neutral-950 w-72'>
                Sidebar
                <nav>
                    <ul className='text-white'>
                        <li>NavElement</li>
                        <li>NavElement</li>
                        <li>NavElement</li>
                        <li>NavElement</li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar