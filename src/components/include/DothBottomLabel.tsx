import React from 'react';

const DothBottomLabel = () => {
    return (
        <div className='absolute text-xs w-full bottom-2'>
            <span className='block w-fit mx-auto text-baseGray opacity-60 drop-shadow'>
            Othmane DERRAR &copy; {" " + new Date().getFullYear() + " "}
            </span>
        </div>
    );
};

export default DothBottomLabel;