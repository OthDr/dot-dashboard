import React from 'react'
import GridSystem from './GridSystem';

const Home: React.FC = () => {
    return (
        <main className='h-full min-h-screen p-2 lg:p-8'>
            <div className="w-full h-full flex flex-col gap-4 lg:gap-10 ">
                <GridSystem />
            </div>
        </main>
    )
};

export default Home