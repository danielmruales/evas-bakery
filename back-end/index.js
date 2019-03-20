const express = require('express')
const App = express()
const mongoose = require('mongoose')
const port = process.env.port || 3003

App.use(express.json())
App.use('/bakery', require('./routes/menuroutes'))

mongoose.connect('mongodb://localhost:27017/bakery', {useNewUrlParser: true})
    .then(console.log('Connected'))
    .catch(err=> console.log(err))

App.listen(port, ()=>console.log(`listening on port ${port}`))