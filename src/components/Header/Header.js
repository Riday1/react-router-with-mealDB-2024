import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/burder.png'
const Header = () => {
    return (
        <div className=''>


            <Link className='no-underline text-xl ml-6' to='/home'>Home</Link>
            <Link className='no-underline text-xl ml-6' to='/about'>About</Link>
            <Link className='no-underline text-xl ml-6' to='/meals-category'>Meal Category</Link>


        </div>
    );
};

export default Header;