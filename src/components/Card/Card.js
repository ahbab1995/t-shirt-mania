import React from 'react';

const Card = ({cart ,heandleRemoveItem}) => {
    return (
        <div className='sticky top-0'>
            <p className='text-2xl -'>This is Card {cart.length}</p>
            {
                cart.map(tShirt => <p>{tShirt.name} <button onClick={() => heandleRemoveItem(tShirt)} className='bg-gray-200 p-1 rounded-full border border-gray-700'>X</button></p>)
            }
        </div>
    );
};

export default Card;