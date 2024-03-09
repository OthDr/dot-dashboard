import React from 'react'
import GridSystem from './GridSystem';

const Home: React.FC = () => {
    return (
        <main className='px-2 lg:px-8 w-full h-full'>
            <div className="flex flex-col gap-4 lg:gap-10 ">
                <GridSystem />
            </div>
        </main>
    )
};

export default Home