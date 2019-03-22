const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
        type: Number,
        require: true
    },
    desiredMenu: {
        type: String,
        require: true 
    },
    questions:String,
    dayOfEvent:{
        type:Date,
        required:true
    },
    timeOfPickup:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Catering', caterSchema)