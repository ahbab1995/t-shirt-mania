import React from 'react';

// Conditional rendaring 



const Card = ({cart ,heandleRemoveItem}) => {
    let command ;

    if (cart.length === 0) {
        command = <p>Please add to card</p>
    }
    else if(cart.length === 2){
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div className='sticky top-0'>
            <p className='text-2xl -'>This is Card {cart.length}</p>
            {
                cart.map(tShirt => <p>{tShirt.name} <button onClick={() => heandleRemoveItem(tShirt)} className='bg-gray-200 p-1 rounded-full border border-gray-700'>X</button></p>)
            }
            {command}
        </div>
    );
};

export default Card;