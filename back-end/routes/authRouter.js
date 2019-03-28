const express = require('express')
const authRouter = express.Router()
const user = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
    user.findOne({username: req.body.username}, (err, existingUser)=>{
        if(err) {
        res.status(500)
        return next(err)
        }

        if(existingUser !== null) return res.status(500).send(new Error('That username exists!'))
        const newUser = new user(req.body)
        newUser.save((err, user)=>{
            if(err) res.status(500).send(err)
            const token = jwt.sign(user.toObject(), process.env.SECRET) //creating the token for that specific user, giving the token a payload which in this case. The token is not being saved to the database it's just servers communicating w/each other
            return res.status({
                success: true,
                user: user.toObject(),
                token
            })
        })
    })
})

authRouter.post('/login', (req, res) => {
    user.findOne({username: req.body.username.toLowerCase()}, (err, user)=>{
        if (err) res.status(500).send(err)
        if (!user || user.password !== req.body.password) return res.status(403).send(new Error('Username or password incorrect!'))
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({
            token,
            user: user.toObject(),
            success: true
        })
    })
})



module.exports = authRouter