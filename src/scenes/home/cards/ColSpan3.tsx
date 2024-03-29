import React from 'react';
import { SemiCircleProgress } from 'react-semicircle-progressbar';

const ColSpan3: React.FC = () => {

    const progressValue = 85;

    return (
        <div className='group min-w-[200px] relative block rounded-xl overflow-hidden h-[260px] lg:h-full'>
            <div className='z-10 p-4 h-full w-full top-0 left-0 absolute block bg-gradient-to-br from-darkPurple/80 to-darkestPurple1/25 duration-150 lg:opacity-75 hover:opacity-100'>

                <div className="w-full flex flex-col text-primaryWhite lg:gap-y-1">
                    <h2 className='text-lg lg:text-xl font-bold'>Clients satisfaction</h2>
                    <p className='text-xs lg:text-sm text-baseGray max-w-44'>From all projects</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto w-fit h-full bg-transparent">

                    <SemiCircleProgress
                        percentage={progressValue}
                        size={{
                            width: 200,
                            height: 200,
                        }}
                        strokeWidth={10}
                        strokeColor="#0075FF"
                        hasBackground={true}
                        bgStrokeColor="#1A1E3A"
                    />
                    <div className="absolute top-[134px] w-[120%] flex flex-col gap-y-2 items-center justify-center bg-darkPurple rounded-lg p-2">
                        {/* <span className="text-sm whitespace-nowrap lg:text-base font-bold text-baseGray">
                            {progressValue}%
                        </span> */}
                        <span className="text-xs whitespace-nowrap lg:text-sm text-baseGray">
                            Based on Likes
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ColSpan3;