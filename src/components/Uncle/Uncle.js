import React from 'react';

const Uncle = ({house}) => {
    return (
        <div className='border-solid border border-indigo-600 p-1 mt-3'>
            <p className='text-xl'>Uncle</p>
            <p>House: {house}</p>
        </div>
    );
};

export default Uncle;