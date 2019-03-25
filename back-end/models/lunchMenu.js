const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lunchMenuSchema = new Schema({
    title:String,
    description:String,
    cost: Number,
    timeServed: String,
    variations:[{
        description:String,
        cost:Number
    }]
})

module.exports = mongoose.model("lunchMenu", lunchMenuSchema)