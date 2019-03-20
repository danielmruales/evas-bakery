import React, { Component } from 'react';
import "./Form.css"
class Form extends Component {
    render() {
        return (
            <form>
               <input placeholder="First Name"
                      name=""
                      type="text"
                      required></input> 
               <br></br>
               <input placeholder="Last Name"
                      name=""
                      type="text"
                      required></input> 
               <br></br>
               <input placeholder="Email"
                      name=""
                      type="email"
                      required></input> 
               <br></br>
               <input placeholder="phone Number"
                      name=""
                      type="tel"
                      required></input> 
               <br></br>
               <input placeholder="How Many People At Your Event"
                      name=""
                      type="number"
                      min="10"
                      required></input> 
               <br></br>
               <textarea placeholder="Desired Menu"
                      name=""
                      type="text"
                      required></textarea>
               <br></br>
               <textarea placeholder="Questions"
                      name=""
                      type="text"
                      ></textarea>
               <br></br>
               <button>Submit</button>
            </form>
        );
    }
}

export default Form;