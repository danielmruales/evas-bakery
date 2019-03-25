import React from 'react'
import Navbar from './Navbar'
import './Admin.css'

const Admin = ()=>{
    return(
        <div>
            <Navbar/>
            <h1 className='intro'> Welcome to the Admin page, select an option above to begin.</h1>
            <div className='meme'>
                <img src='https://i.imgflip.com/21acb2.jpg' alt='admin meme'/>
            </div>
        </div>
    )
}

export default Admin