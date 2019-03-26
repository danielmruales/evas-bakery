import React, { Component } from 'react';
import axios from 'axios'
import {withGlobalData} from '../GlobalData'

class BreakfastEdit extends Component {
    constructor(){
        super()
        this.state = {
           title:"",
           description:"",
           price:"" 
        }
    }
    
    componentDidMount(){
     this.props.getBreakfastMenu()   
    }

    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        this.props.postBreakfastMenu(this.state)
    }
    deleteBreakfastMenuItem = (e) =>{
        axios.delete(`/breakfastmenu/${e.target.name}`)
    }
    
    render() {
        const mappedBreakfastMenu = this.props.breakfastMenuItems.map((breakfastMenuItem, i) => {
            return (
                <div className='adminItems'>
                    <h1>{breakfastMenuItem.title}</h1>
                    <h2>{breakfastMenuItem.description}</h2>
                    <form className='adminMenuBtn' action="" name={breakfastMenuItem._id} onSubmit={this.deleteBreakfastMenuItem}>
                        <button>Delete</button>
                    </form>

                    <button>Edit</button>
                </div>
            )
        }) 

        

        return (
            <div>
          
                <h1 className='titleMenu'>Breakfast Menu</h1>
                <div className='adminMenu'>
                    {mappedBreakfastMenu}
                </div>

                
                <form className='adminForm' onSubmit={this.handleSubmit}>
                    <input placeholder="title"
                            name="title"
                            type="text"
                            required
                            value={this.state.title}
                            onChange={this.handleChange}></input> 
                    <br></br>

                    <input placeholder="description"
                            name="description"
                            type="text"
                            required
                            value={this.state.description}
                            onChange={this.handleChange}></input> 
                    <br></br>

                    <input placeholder="price"
                            name="price"
                            type="number"
                            required
                            min="0"
                            value={this.state.price}
                            onChange={this.handleChange}></input> 
                   

                    <button>Add item</button>
                </form>
            </div>
        );
    }
}



export default withGlobalData(BreakfastEdit);