import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import Catering from '../Catering/Catering'
// import About from './About/About'

const SubApp = ()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Menu/>
            <Catering/>
        </div>
    )
}

export default SubApp