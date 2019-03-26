import React, { Component } from 'react';
import axios from 'axios'
import {withGlobalData} from '../GlobalData'

class SaladEdit extends Component {
    constructor(){
        super()
        this.state = {
           title:"",
           description:"",
           price:"" 
        }
    }
    componentDidMount(){
     this.props.getSaladMenu()   
    }


    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        this.props.postSaladMenu(this.state)
    }
    
    deleteSaladMenuItem = (e) =>{
        axios.delete(`/Saladmenu/${e.target.name}`)
    }
    
    render() {
        const mappedSaladMenu = this.props.saladMenuItems.map((saladMenuItem, i) => {
            return (
                <div className='adminItems'>
                    <h1>{saladMenuItem.title}</h1>
                    <h2>{saladMenuItem.description}</h2>
                    <form className='adminMenuBtn' action="" name={saladMenuItem._id} onSubmit={this.deleteSaladMenuItem}>
                        <button>Delete</button>
                    </form>

                    <button>Edit</button>
                </div>
            )
        }) 

        

        return (
            <div>
          
                <h1 className='titleMenu'>Salad Menu</h1>
                <div className='adminMenu'>
                    {mappedSaladMenu}
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



export default withGlobalData(SaladEdit);