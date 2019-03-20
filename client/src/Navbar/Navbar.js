import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
        
            <Link to='/'className='navLinks'>Home</Link>
            <Link to='/menu'className='navLinks'>Menu</Link>
            <Link to='/'>
                <img src='http://www.evasbakeryslc.com/images/logo.jpg' alt='logo'/>
            </Link>
            <Link to='/catering' className='navLinks'>Catering</Link>
            <Link to='/about' className='navLinks'>About</Link>
         
        </div>
    );
};

export default Navbar;