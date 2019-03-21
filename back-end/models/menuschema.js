const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    title:String,
    description:String,
    cost:Number,
    variations:[{
        description:String,
        cost:Number
    }]
})

module.exports = mongoose.model("Menu", menuSchema)