import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../hooks/CustomLink';

const Header = () => {
    return (
        <div>
            <h1 className='text-4xl my-3'>T-Shirt Mania</h1>
            <nav className='flex justify-center m-5'>
                <CustomLink className='mr-3' to='/'>Home</CustomLink>
                <CustomLink to='/OrderReview'>Order Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;