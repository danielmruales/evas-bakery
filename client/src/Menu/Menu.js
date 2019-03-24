import React, {Component} from 'react';
import {withGlobalData} from '../GlobalData'
import './Menu.css'

class Menu extends Component {
    constructor(){
        super()
        this.state= {
            
        }
    }

    componentDidMount(){
        this.props.getMenu()
    }
    
    render(){

    const mappedMenu = this.props.menuItems.map((menuItem, i)=>{
    return (
        <div className='items'>
            
            <h2 className='itemTitle'> {menuItem.title} </h2>
            <h3 className='description'> {menuItem.description} </h3>
            <h4 className='price'> {menuItem.cost} </h4>
            
        
        </div>
        )})

    return (
                <div id='menu'>
                    <h1 className='breakfast'>Breakfast</h1>
                    {mappedMenu}
                    <h1 className='lunch'>Lunch</h1>
                    {mappedMenu}
                    <h1 className='salad'>Salads</h1>
                    {mappedMenu}
                    <br/>
                    <br/>
                </div>
            );
}
}

export default withGlobalData(Menu);