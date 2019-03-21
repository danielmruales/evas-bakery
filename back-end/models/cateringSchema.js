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