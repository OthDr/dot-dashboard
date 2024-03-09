import React from 'react';
import BarChart from '../../../components/charts/BarChart';

const ColSpan5R2: React.FC = () => {
    return (
        <div className='group relative block rounded-xl overflow-hidden h-[260px] lg:h-[300px]'>
            <div className='z-10 p-2 lg:p-4 h-full w-full top-0 left-0 absolute flex lg:flex-row flex-col gap-y-2 bg-gradient-to-br from-darkPurple/70 to-darkestPurple1/25 duration-150 lg:opacity-75 hover:opacity-100'>

                <div className="w-1/3 flex flex-col text-primaryWhite lg:gap-y-4">
                    <h1 className='text-lg lg:text-xl font-bold drops'>Traffic</h1>

                    <ul className='h-fit flex lg:flex-col gap-y-2 gap-x-3 lg:gap-y-4 text-base drop-shadow'>
                        <li className='text-sm lg:text-base border-b lg:border-none border-primaryGreen'>Users:
                            <span className="text-primaryGreen font-bold pl-1 lg:px-2">
                                +73
                            </span>
                        </li>
                        <li className='text-sm lg:text-base border-b lg:border-none border-primaryGreen'>Clicks:
                            <span className="text-primaryGreen font-bold pl-1 lg:px-2">
                                +918
                            </span>
                        </li>
                        <li className='text-sm lg:text-base border-b lg:border-none border-primaryGreen'>Sales:
                            <span className="text-primaryGreen font-bold pl-1 lg:px-2">
                                +54
                            </span>
                        </li>
                    </ul>
                </div>

                <div className=" block w-full h-[180px] lg:h-full bg-transparent bg-[#030616] p-2 rounded-xl group-hover:shadow-darkestPurple1 shadow-sm group-hover:shadow-md ">
                    <BarChart />
                </div>

            </div>
        </div>
    );
};

export default ColSpan5R2;