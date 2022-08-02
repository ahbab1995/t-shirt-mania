import React from 'react';
import useTShirt from '../../hooks/useTShirt';
import Card from '../Card/Card';
import Tshirt from '../tShirt/Tshirt';

const Home = () => {
    const [tShirts, setTShirt] = useTShirt()
    return (
        <div className='grid grid-cols-3 gap-4 '>
            <div className='border-solid border-2 col-span-2 grid grid-cols-3 gap-2 p-3'>
                {
                    tShirts.map(tShirt  => <Tshirt 
                        key = {tShirt._id}
                        tShirt = {tShirt}
                    ></Tshirt> )
                }
            </div>
            <div className='border-solid border-2'>
                <Card></Card>
            </div>
        </div>      
    );
};

export default Home;