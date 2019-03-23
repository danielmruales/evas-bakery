import React from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
        
            <a href='#home' className='navItems'>Home</a>
            <a href='#menu' className='navItems'>Menu</a>
            <Link to='/admin'>
                <img src='http://www.evasbakeryslc.com/images/logo.jpg' alt='logo'/>
            </Link>
            <a href='#catering' className='navItems'>Catering</a>
            <a href='#about' className='navItems'>About</a>
         
        </div>
    );
};

export default Navbar;