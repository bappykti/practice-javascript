import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
            <nav className='header-bg'>
                <div className='header'>
                    <img src={logo} alt="" />
                    <div>
                        <a href="/order">Order</a>
                        <a href="/review">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </nav>
    );
};

export default Header;