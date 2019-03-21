const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Full Name
// Email
// Phone #
// # of Attendees
// Desired Menu Items
// Questions & Comments
// date of catering


//Schema Template
const caterSchema = new Schema({
    fullName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    phoneNum: {
        type: Number,
        require: true
    },
    numOfAttend: {
        type: String,
        require: true
    },
    orderItems: {
        type: String,
        require: true 
    },
    questions: {
        type: String,
        require: true
    },
    dateOfCatering:{
        type: Number,
        require: true
    }



})
    module.exports = mongoose.model('Catering', caterSchema)

