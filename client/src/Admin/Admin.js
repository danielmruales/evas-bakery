import React from 'react'
import Navbar from './Navbar'
import Catering from './CheckCatering'
import Menus from './EditMenus'
import './Admin.css'

const Admin = ()=>{
    return(
        <div>
            <Navbar/>
            <Catering/>
            <Menus/>
        </div>
    )
}

export default Admin