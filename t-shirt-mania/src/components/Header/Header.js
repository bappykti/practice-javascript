import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/about'>About</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/products'>Products</Link>
            <Link to='/grandpa'>GrandPA</Link>
        </nav>
    );
};

export default Header;