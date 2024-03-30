import React from 'react';
import LineChart from '../../../components/charts/LineChart';

const ColSpan4R1 = () => {
    return (
        <div className='group relative block rounded-xl overflow-hidden h-[260px] lg:h-full'>
            <div className='z-10 p-2 lg:p-4 h-full w-full top-0 left-0 absolute  flex lg:flex-row flex-col bg-gradient-to-r to-darkPurple/50 from-darkestPurple1/45  duration-150  lg:opacity-75 hover:opacity-100'>

                <div className=" block w-full lg:w-full h-[180px] lg:h-full py-2 bg-transparent ">
                    <LineChart />
                </div>

            </div>
        </div>
    );
};

export default ColSpan4R1;