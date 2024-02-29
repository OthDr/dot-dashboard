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
            className='grid grid-cols-12 gap-2'
        >
            <div className="p-2 bg-red-300 col-span-5">
                <ColSpan5R1 />
            </div>
            <div className="p-2 bg-red-300 col-span-3">
                <ColSpan3 />
            </div>
            <div className="p-2 bg-red-300 col-span-4">
                <ColSpan4R1 />
            </div>
            <div className="p-2 bg-red-300 col-span-7">
                <ColSpan7 />
            </div>
            <div className="p-2 bg-red-300 col-span-5">
                <ColSpan5R2 />
            </div>
            <div className="p-2 bg-red-300 col-span-8">
                <ColSpan8 />
            </div>
            <div className="p-2 bg-red-300 col-span-4">
                <ColSpan4R2 />
            </div>
        </div>
    );
};

export default GridSystem;