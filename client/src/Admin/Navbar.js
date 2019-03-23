import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <div>
            <Link to='/home'>Home</Link>
            <a href="#menu">Menu</a>
            <a href="#catering">Catering Requests</a>
            <a href="#orders">Onliine Orders</a>
        </div>
    )
}

export default Navbar