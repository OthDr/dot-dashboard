import React from 'react';
import LineChart from '../../../components/charts/LineChart';

const ColSpan7: React.FC = () => {
    return (
        <div className='group relative block rounded-xl overflow-hidden h-[260px] lg:h-[300px]'>
            <div className='z-10 p-4 h-full w-full top-0 left-0 absolute flex bg-gradient-to-r to-darkPurple/50 from-darkestPurple1/45  duration-150  lg:opacity-75 hover:opacity-100'>

                <div className="w-1/3 flex flex-col text-primaryWhite lg:gap-y-2">
                    <p className='text-xs lg:text-sm text-baseGray'>Welcome back,</p>
                    <h2 className='text-lg lg:text-xl font-bold'>Mark Johnson</h2>
                    <p className='text-xs lg:text-sm text-baseGray max-w-44'>Glad to see you again! Ask me anything.</p>
                </div>
                <div className=" block w-2/3 h-full bg-transparent bg-darkPurple ">
                    <LineChart />
                </div>

            </div>
        </div>
    );
};

export default ColSpan7;