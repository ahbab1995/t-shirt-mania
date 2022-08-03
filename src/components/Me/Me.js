import React from 'react';

const Me = ({house}) => {
    return (
        <div className='border-solid border border-indigo-600 p-1'>
            <p>Me</p>
            <p>house:{house}</p>
        </div>
    );
};

export default Me;