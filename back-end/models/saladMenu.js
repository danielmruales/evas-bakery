const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saladMenuSchema = new Schema({
    title:String,
    description:String,
    cost: Number,
    timeServed: String,
    variations:[{
        description:String,
        cost:Number
    }]
})

module.exports = mongoose.model("saladMenu", saladMenuSchema)