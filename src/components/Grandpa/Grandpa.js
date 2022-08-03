import React, { useState } from 'react';
import Aunite from '../Aunite/Aunite';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handelAddhouse = () =>{
        const newhouse = house + 1;
        setHouse(newhouse)
    }

    return (
        <div className='border-solid border border-indigo-600 p-1 w-4/5 m-auto '>
            <h2 className='text-2xl p-5'>GrandPa</h2>
            <button onClick={handelAddhouse} className='border-solid border border-indigo-600 p-1 bg-indigo-600 text-cyan-50'>Add to House</button>
            <p>House: {house}</p>
            <div className='grid grid-cols-3 gap-3'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunite house={house}></Aunite>
            </div>
        </div>
    );
};

export default Grandpa;