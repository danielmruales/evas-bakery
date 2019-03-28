const express = require('express')
const App = express()
require('dotenv').config()
const expressJwt = require('express-jwt')
const mongoose = require('mongoose')
const port = process.env.port || 3003

App.use(express.json())
App.use('/api', expressJwt({secret: process.env.SECRET}))


App.use('/breakfastmenu', require('./routes/breakfastMenuRoute'))
App.use('/lunchmenu', require('./routes/lunchMenuRoute'))
App.use('/saladmenu', require('./routes/saladMenuRoute'))
App.use('/api/catering', require('./routes/cateringRoutes'))
App.use('/auth', require('./routes/authRouter')) //dont put /api in front of auth because thats where we are getting the token from 

mongoose.connect('mongodb://localhost:27017/bakery', {useNewUrlParser: true})
    .then(console.log('Connected'))
    .catch(err=> console.log(err))


App.use((err, req, res)=> {
    console.err(err);
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({
        message: err.message
    })
})

App.listen(port, ()=>console.log(`listening on port ${port}`))
