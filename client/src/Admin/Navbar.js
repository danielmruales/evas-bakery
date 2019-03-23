import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <div className="nav">
            <Link to='/home'><img src="http://www.evasbakeryslc.com/images/logo.jpg" alt="logo"/></Link>
            <a href="#menu">Menu</a>
            <a href="#catering">Catering Requests</a>
        </div>
    )
}

export default Navbar