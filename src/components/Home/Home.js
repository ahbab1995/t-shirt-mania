import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Card from '../Card/Card';
import Tshirt from '../tShirt/Tshirt';

const Home = () => {
    const [tShirts, setTShirt] = useTShirt()
    const [cart, setCart] = useState([]);

    const handelAddtoCard = (selectedItem) =>{
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id)
        if(!exists){
            const newCard = [...cart , selectedItem];
            setCart(newCard)
        }
        else{
            alert('item already added');
        }
    }
    const heandleRemoveItem = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
        setCart(rest)
    }
    
    return (
        <div className='grid grid-cols-3 gap-4 '>
            <div className='border-solid border-2 col-span-2 grid grid-cols-3 gap-2 p-3'>
                {
                    tShirts.map(tShirt  => <Tshirt 
                        key = {tShirt._id}
                        tShirt = {tShirt}
                        handelAddtoCard = {handelAddtoCard}
                    ></Tshirt> )
                }
            </div>
            <div className='border-solid border-2'>
                <Card cart={cart} heandleRemoveItem = {heandleRemoveItem} key = {cart._id}></Card>
            </div>
        </div>      
    );
};

export default Home;