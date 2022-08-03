import React from 'react';

const Brother = ({house}) => {
    return (
        <div className='border-solid border border-indigo-600 p-1'>
            <p>Brother</p>
            <p>House: {house}</p>
        </div>
    );
};

export default Brother;