import React from 'react'
import GridSystem from './GridSystem';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 lg:gap-10 ">
            <GridSystem />
        </div>
    )
};

export default Home