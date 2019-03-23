import React, { Component } from 'react';
import Form from "./Form"
import "./Catering.css"
class Catering extends Component {
    render() {
        return (
            <div className='formContainer'>
            
                <div className="title" id='catering'>
                    <h1>Let us do the work.</h1>
                </div>

                <div className="form">
                    <Form />
                </div>
            
            </div>
        )
    }
}

export default Catering;