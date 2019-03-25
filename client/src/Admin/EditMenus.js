import React, { Component } from 'react';
import Navbar from './Navbar'
import axios from 'axios'
import {withGlobalData} from '../GlobalData'

class EditMenus extends Component {

    componentDidMount(){
        this.props.getLunchMenu()
        this.props.getBreakfastMenu()
    }

    deleteLunchMenuItem = (e) =>{
        axios.delete(`/lunchmenu/${e.target.name}`)
    }

    render() {
        const mappedBreakfastMenu = this.props.breakfastMenuItems.map((breakfastMenuItem, i) => {
            return (
                <div className='adminItems'>
                    <h1>{breakfastMenuItem.title}</h1>
                    <h2>{breakfastMenuItem.description}</h2>
                </div>
            )
        }) 

        const mappedLunchMenu = this.props.lunchMenuItems.map((lunchMenuItem, i) => {
            return (
                <div className='adminItems'>
                    <h1>{lunchMenuItem.title}</h1>
                    <h2>{lunchMenuItem.description}</h2>
                    <form className='adminMenuBtn' action="" name={lunchMenuItem._id} onSubmit={this.deleteLunchMenuItem}>
                        <button>Delete</button>
                    </form>
                        <button>Edit</button>
                </div>
            )
        }) 






        return (
            <div>
                <Navbar/>
                <h1 className='titleMenu'>Breakfast Menu</h1>
                <div className='adminMenu'>
                    {mappedBreakfastMenu}
                </div>
                <h1 className='titleMenu'>Lunch Menu</h1>
                <div className='adminMenu'>
                    {mappedLunchMenu}
                </div>
                <form className='adminForm'>
                    <input type='text' placeholder='Item Title'></input>
                    <input type='text'></input>
                    <input type='number' min='0' required></input>
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}

export default withGlobalData(EditMenus);