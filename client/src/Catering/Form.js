import React, { Component } from 'react';
import "./Form.css"
import {withGlobalData} from "./../GlobalData"
class Form extends Component {
       constructor(){
              super()
              this.state = {
                     fullName: "",
                     email: "",
                     phoneNum:"",
                     numOfAttend:"",
                     dayOfEvent:"",
                     timeOfPickup:"",
                     desiredMenu:"",
                     questions:""
               }
       }

       handleChange = (e) => {
              this.setState({[e.target.name]:e.target.value})
       }

       handleSubmit = (e) => {
              e.preventDefault()
              console.log(this.state)
              this.props.postCatering(this.state)
              this.setState({
                     fullName: "",
                     email: "",
                     phoneNum:"",
                     numOfAttend:"",
                     dayOfEvent:"",
                     timeOfPickup:"",
                     desiredMenu:"",
                     questions:""   
              })
       
       }
    render() {
        let today = new Date().toISOString().slice(0, 10)
        return (
            <form onSubmit = {this.handleSubmit}>
               <input placeholder="Full Name"
                      name="fullName"
                      type="text"
                      required
                      value={this.state.fullName}
                      onChange={this.handleChange}></input> 
               <br></br>

               <input placeholder="Email"
                      name="email"
                      type="email"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}></input> 
               <br></br>

               <input placeholder="Phone Number"
                      name="phoneNum"
                      type="tel"
                      required
                      value={this.state.phoneNum}
                      onChange={this.handleChange}></input> 
               <br></br>

               <input type="date"
                      placeholder="pickup Date"
                      min={today}
                      name="dayOfEvent"
                      value={this.state.dayOfEvent}
                      onChange={this.handleChange}></input>
               <br></br>
                
             
              <select type="selct"
                      placeholder="pickup time"
                      name="timeOfPickup"
                      onChange={this.handleChange}>
                      <option >Pick-Up time</option>
                      <option value="07:30 AM - 08:30 AM">07:30 AM - 08:30 AM</option>
                      <option value="08:30 AM - 09:30 AM">08:30 AM - 09:30 AM</option>
                      <option value="09:30 AM - 10:30 AM">09:30 AM - 10:30 AM</option>
                      <option value="10:30 AM - 11:30 AM">10:30 AM - 11:30 AM</option>
                      <option value="11:30 AM - 12:30 PM">11:30 AM - 12:30 PM</option>
                      <option value="12:30 PM - 01:30 PM">12:30 PM - 01:30 PM</option>
                      <option value="01:30 PM - 02:30 PM">01:30 PM - 02:30 PM</option>
                      <option value="02:30 PM - 03:30 PM">02:30 PM - 03:30 PM</option>
                      <option value="03:30 PM - 04:30 PM">03:30 PM - 04:30 PM</option>
                      <option value="04:30 PM - 05:30 PM">04:30 PM - 05:30 PM</option>
                 </select>
               <br></br>

               <input placeholder="Number Of People (25-500)"
                      name="numOfAttend"
                      type="number"
                      min="25"
                      max="500"
                      required
                      value={this.state.numOfAttend}
                      onChange={this.handleChange}></input> 
               <br></br>
               <textarea placeholder="Desired Menu"
                      name="desiredMenu"
                      type="text"
                      required
                      value={this.state.desiredMenu}
                      onChange={this.handleChange}></textarea>
               <br></br>
               <textarea placeholder="Questions Or Special Requests"
                      name="questions"
                      type="text"
                      value={this.state.questions}
                      onChange={this.handleChange}
                      ></textarea>
               <br></br>
               <button>Submit</button>
            </form>
        );
    }
}

export default withGlobalData(Form);