const express = require("express")
const saladMenuRoute = express.Router()
const saladMenu =require('../models/saladMenu')

saladMenuRoute.route('/')

    .get((req,res)=>{
        saladMenu.find((err, found)=>{
            err ? res.status(500).send(err) : res.status(200).send(found)
        })
    })

    .post((req, res)=>{
        const newsaved = new saladMenu(req.body)
        newsaved.save(err=>{
            err ? res.status(500).send(err) : res.status(200).send(newsaved)
        })
    })

saladMenuRoute.route('/:id')

    .get((req, res)=>{
        const {id} = req.params
        saladMenu.findById(id,(err, found)=>{
            err ? res.status(500).send(err) : res.status(500).send(found)
        })
    })

    .put((req, res)=>{
        const {id} = req.params
        const body = req.body
        saladMenu.findByIdAndUpdate(id, body, {new:true},(err, updated)=>{
            err ? res.status(500).send(err) : res.status(200).send(updated)
        })
    })

    .delete((req, res)=>{
        const {id} = req.params
        saladMenu.findByIdAndDelete(id,err=>{
            err ? res.status(500).send(err) : res.status(200).send('successfully deleted')
        })
    })

module.exports = saladMenuRoute