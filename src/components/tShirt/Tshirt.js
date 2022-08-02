import React from 'react';

const Tshirt = ({tShirt}) => {
    const {price,picture,name,gender} = tShirt;
    return (
        <div className=' border border-gray-500 rounded-md p-2'>
            <img className='  h-96 ' src={picture} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{gender ?  gender : 'not'}</p>
        </div>
    );
};

export default Tshirt;