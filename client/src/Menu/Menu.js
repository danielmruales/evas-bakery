import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(){
        super()
        this.state= {
            
        }
    }
    
    render(){
    return (
        <div id='menuDiv'>
            <h1 className='title'>Explore Our Menu</h1>
            <div className='secondMenuDiv'>
                <h1>Hello</h1>
                <div className='menu'> 
                <h1>Menu</h1>
                
                 </div>
            </div>
        </div>
    );
    }
}

export default Menu;