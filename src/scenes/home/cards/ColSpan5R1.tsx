import React from 'react';
import bg from "../../../assets/bg/cspan11.png";

const ColSpan5R1: React.FC = () => {
    return (
        <div className='group relative block rounded-xl overflow-hidden h-[260px]'>
            <img className='relative w-full h-[260px] opacity-80 group-hover:opacity-100 duration-150' src={bg} alt="bg" />
            <div className='z-10 p-4 h-full w-full top-0 left-0 absolute block bg-gradient-to-r from-darkPurple to-transparent  duration-150'>

                <div className="flex flex-col text-primaryWhite lg:gap-y-2">
                    <p className='text-xs lg:text-sm text-baseGray'>Welcome back,</p>
                    <h2 className='text-lg lg:text-xl font-bold'>Mark Johnson</h2>
                    <p className='text-xs lg:text-sm text-baseGray max-w-44'>Glad to see you again! Ask me anything.</p>
                </div>

            </div>
        </div>
    );
};

export default ColSpan5R1;