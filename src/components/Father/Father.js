import React from 'react';
import Brother from '../Brother/Brother';
import Me from '../Me/Me';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div className='border-solid border border-indigo-600 p-1 mt-3'>
            <p className='text-xl'>Father</p>
            <p>House: {house}</p>
            <div className='grid grid-cols-3 gap-2 p-1'>
                <Me house={house}></Me>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;