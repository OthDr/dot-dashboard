import React from 'react'
import GridSystem from './GridSystem';

const Home: React.FC = () => {
    return (
        <div className=' min-h-screen p-8'>
            <div className="w-full flex flex-col gap-4 lg:gap-10">
                <GridSystem />
            </div>
        </div>
    )
};

export default Home