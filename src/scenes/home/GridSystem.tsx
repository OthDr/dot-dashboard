import React from 'react';
import ColSpan5R1 from './cards/ColSpan5R1';
import ColSpan7 from './cards/ColSpan7';
import ColSpan5R2 from './cards/ColSpan5R2';
import ColSpan8 from './cards/ColSpan8';
import ColSpan3 from './cards/ColSpan3';
import ColSpan4R2 from './cards/ColSpan4R2';
import ColSpan4R1 from './cards/ColSpan4R1';

const GridSystem: React.FC = () => {
    return (
        <div
            className='grid lg:grid-cols-12 gap-x-1 gap-y-4 md:gap-y-2 lg:gap-3 h-full '
        >
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-12 md:col-span-9 lg:col-span-5  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />
            </div>
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-5 md:col-span-5 lg:col-span-3  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />{/* <ColSpan3 /> */}
            </div>
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-7 md:col-span-7 lg:col-span-4  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />{/* <ColSpan4R1 /> */}
            </div>
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-12 md:col-span-10 lg:col-span-7  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan7 />
            </div>
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-12 md:col-span-8 lg:col-span-5  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />{/* <ColSpan5R2 /> */}
            </div>
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-12 md:col-span-5 lg:col-span-8  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />{/* <ColSpan8 /> */}
            </div>
            <div className="h-[260px] lg:h-[300px] bg-transparent col-span-12 md:col-span-12 lg:col-span-4  hover:scale-[101%] duration-300 rounded-xl shadow-lg hover:shadow-black/60">
                <ColSpan5R1 />{/* <ColSpan4R2 /> */}
            </div>
        </div>
    );
};

export default GridSystem;