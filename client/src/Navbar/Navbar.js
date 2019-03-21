import React from 'react';

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
        
            <a href='#home' className='navItems'>Home</a>
            <a href='#menu' className='navItems'>Menu</a>
            <a href='#home'>
                <img src='http://www.evasbakeryslc.com/images/logo.jpg' alt='logo'/>
            </a>
            <a href='#catering' className='navItems'>Catering</a>
            <a href='#about' className='navItems'>About</a>
         
        </div>
    );
};

export default Navbar;