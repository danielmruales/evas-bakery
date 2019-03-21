const express = require('express')
const App = express()
const mongoose = require('mongoose')
const port = process.env.port || 3003

App.use(express.json())
<<<<<<< HEAD:back-end/server.js
=======
App.use('/menu', require('./routes/menuroutes'))
>>>>>>> 01acd01c131d49837b70cb9cd02c0132777be02c:back-end/index.js
App.use('/catering', require('./routes/cateringRoutes'))

mongoose.connect('mongodb://localhost:27017/bakery', {useNewUrlParser: true})
    .then(console.log('Connected'))
    .catch(err=> console.log(err))

<<<<<<< HEAD:back-end/server.js

App.listen(port, ()=>console.log(`listening on port ${port}`))
=======
App.listen(port, ()=>console.log(`listening on port ${port}`))
>>>>>>> 01acd01c131d49837b70cb9cd02c0132777be02c:back-end/index.js
