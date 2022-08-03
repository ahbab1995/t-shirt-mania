import React from 'react';

const Sister = ({house}) => {
    return (
        <div className='border-solid border border-indigo-600 p-1'>
            <p>Sister</p>
            <p>house: {house}</p>
        </div>
    );
};

export default Sister;