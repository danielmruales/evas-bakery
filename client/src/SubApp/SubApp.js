import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import Catering from '../Catering/Catering'
import Footer from '../Footer/Footer'

const SubApp = ()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Menu/>
            <Catering/>
            <Footer/>
        </div>
    )
}

export default SubApp