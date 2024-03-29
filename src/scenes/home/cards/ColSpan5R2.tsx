import React from 'react';
import BarChart from '../../../components/charts/BarChart';

const ColSpan5R2: React.FC = () => {
    return (
        <div className='group relative block rounded-xl overflow-hidden h-[260px] lg:h-full'>
            <div className='z-10 p-2 lg:p-4 h-full w-full top-0 left-0 absolute flex lg:flex-row flex-col gap-y-2 bg-gradient-to-br from-darkPurple/70 to-darkestPurple1/25 duration-150 lg:opacity-75 hover:opacity-100'>

            <BarChart />

            </div>
        </div>
    );
};

export default ColSpan5R2;