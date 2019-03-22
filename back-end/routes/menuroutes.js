const express = require("express")
const menuRoute = express.Router()
const Menu =require('../models/menuschema')

menuRoute.route('/')

    .get((req,res)=>{
        Menu.find((err, found)=>{
            err ? res.status(500).send(err) : res.status(200).send(found)
        })
    })

    .post((req, res)=>{
        const newsaved = new Menu(req.body)
        newsaved.save(err=>{
            err ? res.status(500).send(err) : res.status(200).send(newsaved)
        })
    })

menuRoute.route('/:id')

    .get((req, res)=>{
        const {id} = req.params
        Menu.findById(id,(err, found)=>{
            err ? res.status(500).send(err) : res.status(500).send(found)
        })
    })

    .put((req, res)=>{
        const {id} = req.params
        const body = req.body
        Menu.findByIdAndUpdate(id, body, {new:true},(err, updated)=>{
            err ? res.status(500).send(err) : res.status(200).send(updated)
        })
    })

    .delete((req, res)=>{
        const {id} = req.params
        Menu.findByIdAndDelete(id,err=>{
            err ? res.status(500).send(err) : res.status(200).send('successfully deleted')
        })
    })

module.exports = menuRoute    