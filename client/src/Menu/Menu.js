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
        this.props.getBreakfastMenu()
        this.props.getLunchMenu()
        this.props.getSaladMenu()
    }

  
    render(){

    const mappedBreakfastMenu = this.props.breakfastMenuItems.map((menuItem, i)=>{
    return (
        <div className='items'>
            
            <h2 className='itemTitle'> {menuItem.title} </h2>
            <h3 className='description'> {menuItem.description} </h3>
            <h4 className='price'> $ {menuItem.cost} </h4>
           
            
        
        </div>
        )})


        const mappedLunchMenu = this.props.lunchMenuItems.map((lunchMenuItem, i)=>{
            return (
                <div className='lunchItems'>
                    
                    <h2 className='itemTitle'> {lunchMenuItem.title} </h2>
                    <h3 className='description'> {lunchMenuItem.description} </h3>
                    <h4 className='price'> $ {lunchMenuItem.cost} </h4>
                   
                    
                
                </div>
                )})
    
        const mappedSaladMenu = this.props.saladMenuItems.map((saladMenuItem, i)=>{
            return (
                <div className='saladItems'>
                            
                    <h2 className='itemTitle'> {saladMenuItem.title} </h2>
                    <h3 className='description'> {saladMenuItem.description} </h3>
                    <h4 className='price'> $ {saladMenuItem.cost} </h4>
                    
                            
                        
                </div>
                )})






    return (
                <div id='menu'>
                    <h1 className='breakfast'>Breakfast</h1>
                    {mappedBreakfastMenu}
                    <h1 className='lunch'>Lunch</h1>
                    {mappedLunchMenu}
                    <h1 className='salad'>Salad</h1>
                    {mappedSaladMenu}
                    <br/>
                    <br/>
                </div>
            );
}
}

export default withGlobalData(Menu);