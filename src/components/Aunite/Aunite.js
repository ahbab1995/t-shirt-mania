import React from 'react';

const Aunite = ({house}) => {
    return (
        <div className='border-solid border border-indigo-600 p-1 mt-3'>
            <p className='text-xl'>Aunite</p>
            <p>House: {house}</p>
        </div>
    );
};

export default Aunite;