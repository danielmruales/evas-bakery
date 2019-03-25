import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <div className="adminNav">
            <Link to='/'>
                <img src="http://www.evasbakeryslc.com/images/logo.jpg" alt="logo" className='adminLogo'/>
            </Link>
            <Link to="/editmenu" className='adminNavItems'>Menu</Link>
            <Link to="/catering" className='adminNavItems'>Catering Requests</Link>
        </div>
    )
}

export default Navbar