import React, { Component } from 'react';
import axios from 'axios'
import {withGlobalData} from '../GlobalData'

class LunchEdit extends Component {

    constructor(){
        super()
        this.state = {
           title:"",
           description:"",
           cost:"" 
        }
    }

    componentDidMount(){
     this.props.getLunchMenu()   
    }

    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        this.props.postLunchMenu(this.state)
    }
    deleteLunchMenuItem = (e) =>{
        axios.delete(`/Lunchmenu/${e.target.name}`)
    }
    
    render() {
        const mappedLunchMenu = this.props.lunchMenuItems.map((lunchMenuItem, i) => {
            return (
                <div className='adminItems'>
                    <h1>{lunchMenuItem.title}</h1>
                    <h2>{lunchMenuItem.description}</h2>
                    <h2>$ {lunchMenuItem.cost}</h2>
                    <form className='adminMenuBtn' action="" name={lunchMenuItem._id} onSubmit={this.deleteLunchMenuItem}>
                        <button>Delete</button>
                    </form>

                    <button>Edit</button>
                </div>
            )
        }) 

        

        return (
            <div>
          
                <h1 className='titleMenu'>Lunch Menu</h1>
                <div className='adminMenu'>
                    {mappedLunchMenu}
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

                    <input placeholder="cost"
                            name="cost"
                            type="number"
                            required
                            min="0"
                            value={this.state.cost}
                            onChange={this.handleChange}></input> 
                   

                    <button>Add item</button>
                </form>
            </div>
        );
    }
}



export default withGlobalData(LunchEdit);