import React from 'react';
import ColSpan5R1 from './cards/ColSpan5R1';
import ColSpan7 from './cards/ColSpan7';
import ColSpan5R2 from './cards/ColSpan5R2';
import ColSpan3 from './cards/ColSpan3';
import ColSpan4R1 from './cards/ColSpan4R1';

const GridSystem: React.FC = () => {
    return (
        <div
            className='lg:h-[calc(100vh-90px)] lg:py-2 grid lg:grid-cols-12 lg:grid-rows-6 gap-x-1 gap-y-2 md:gap-y-2 lg:gap-3 '
        >
            <header className="border-2 lg:row-span-1 h-[260px] lg:h-full bg-transparent col-span-12 hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <div className="flex flex-col text-primaryWhite lg:gap-y-2">
                    <p className='text-xs lg:text-sm text-baseGray'>Welcome back,</p>
                    <h2 className='text-lg lg:text-xl font-bold'>Othmane DERRAR</h2>
                    <p className='text-xs lg:text-sm text-baseGray max-w-44'>Glad to see you again! Ask me anything.</p>
                </div>
            </header>

            <div className="lg:row-span-2 h-[260px] lg:h-full bg-transparent col-span-12 md:col-span-7 lg:col-span-4  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />{/* <ColSpan4R1 /> */}
            </div>
            <div className="lg:row-span-2 h-[260px] lg:h-full bg-transparent col-span-12 md:col-span-5 lg:col-span-3  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan3 />
            </div>
            <div className="lg:row-span-2 h-[260px] lg:h-full bg-transparent col-span-12 md:col-span-9 lg:col-span-5  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan4R1 />
            </div>
            <div className="lg:row-span-3 h-[260px] lg:h-full bg-transparent col-span-12 md:col-span-10 lg:col-span-8  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan7 />
            </div>
            <div className="lg:row-span-3 h-[260px] lg:h-full bg-transparent col-span-12 md:col-span-8 lg:col-span-4  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R2 />
            </div>
        </div>
    );
};

export default GridSystem;