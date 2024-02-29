import React from 'react';

const GridSystem = () => {
    return (
        <div
            className='grid grid-cols-12 gap-2'
        >
            <div className="p-2 bg-red-300 col-span-5">x</div>
            <div className="p-2 bg-red-300 col-span-3">x</div>
            <div className="p-2 bg-red-300 col-span-4">x</div>
            <div className="p-2 bg-red-300 col-span-7">x</div>
            <div className="p-2 bg-red-300 col-span-5">x</div>
            <div className="p-2 bg-red-300 col-span-8">x</div>
            <div className="p-2 bg-red-300 col-span-4">x</div>
        </div>
    );
};

export default GridSystem;