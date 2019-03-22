import React, { Component } from 'react';
import "./Form.css"
class Form extends Component {
    render() {
        let today = new Date().toISOString().slice(0, 10)
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

               <input placeholder="Phone Number"
                      name=""
                      type="tel"
                      required></input> 
               <br></br>

               <input type="date"
                      placeholder="pickup Date"
                      min={today}></input>
               <br></br>
                <select>
               <input type="selct"
                      placeholder="pickup time"
                      min="09:00 AM"/>

                      <option>Pick-Up time</option>
                      <option>07:30 AM - 08:30 AM</option>
                      <option>08:30 AM - 09:30 AM</option>
                      <option>09:30 AM - 10:30 AM</option>
                      <option>10:30 AM - 11:30 AM</option>
                      <option>11:30 AM - 12:30 PM</option>
                      <option>12:30 PM - 01:30 PM</option>
                      <option>01:30 PM - 02:30 PM</option>
                      <option>02:30 PM - 03:30 PM</option>
                      <option>03:30 PM - 04:30 PM</option>
                      <option>04:30 PM - 05:30 PM</option>
                 </select>
               <br></br>

               <input placeholder="Number Of People (25-500)"
                      name=""
                      type="number"
                      min="25"
                      max="500"
                      required></input> 
               <br></br>
               <textarea placeholder="Desired Menu"
                      name=""
                      type="text"
                      required></textarea>
               <br></br>
               <textarea placeholder="Questions Or Special Requests"
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