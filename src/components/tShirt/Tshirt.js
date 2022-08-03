import React from 'react';

const Tshirt = ({tShirt , handelAddtoCard}) => {
    const {price,picture,name,gender} = tShirt;
    return (
        <div className=' border border-gray-500 rounded-md p-2'>
            <img className='  h-96 ' src={picture} alt="" />
            <h4 className='text-2xl'>{name}</h4>
            <p>${price}</p>
            <p>{gender ?  gender : 'not'}</p>
            <button onClick={() => handelAddtoCard(tShirt)} className='bg-gray-200 p-1 rounded-full border border-gray-700'>Add to Card</button>
        </div>
    );
};

export default Tshirt;