import React, { Component } from 'react';
import Form from "./Form"
import "./Catering.css"
class Catering extends Component {
    render() {
        return (
            <div className='formContainer'>
            
                <div id='catering'>
                    <h1>Discover Catering</h1>
                </div>

                <div className="form">
                    <br/>
                    <br/>
                    <h1>Let us do the work.</h1>
                    <Form />
                </div>
            
            </div>
        )
    }
}

export default Catering;