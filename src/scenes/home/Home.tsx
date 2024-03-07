import React from 'react'
import GridSystem from './GridSystem';

const Home: React.FC = () => {
    return (
        <main className=' lg:px-8 w-full h-full'>
            <div className="flex flex-col gap-4 lg:gap-10 ">
                <GridSystem />
            </div>
        </main>
    )
};

export default Home