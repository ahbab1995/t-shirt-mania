import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../hooks/CustomLink';

const Header = () => {
    return (
        <div>
            <h1 className='text-4xl my-3'>T-Shirt Mania</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
            </nav>
        </div>
    );
};

export default Header;