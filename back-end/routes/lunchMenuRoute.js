const express = require("express")
const lunchMenuRoute = express.Router()
const lunchMenu =require('../models/lunchMenu')

lunchMenuRoute.route('/')

    .get((req,res)=>{
        lunchMenu.find((err, found)=>{
            err ? res.status(500).send(err) : res.status(200).send(found)
        })
    })

    .post((req, res)=>{
        const newsaved = new lunchMenu(req.body)
        newsaved.save(err=>{
            err ? res.status(500).send(err) : res.status(200).send(newsaved)
        })
    })

lunchMenuRoute.route('/:id')

    .get((req, res)=>{
        const {id} = req.params
        lunchMenu.findById(id,(err, found)=>{
            err ? res.status(500).send(err) : res.status(500).send(found)
        })
    })

    .put((req, res)=>{
        const {id} = req.params
        const body = req.body
        lunchMenu.findByIdAndUpdate(id, body, {new:true},(err, updated)=>{
            err ? res.status(500).send(err) : res.status(200).send(updated)
        })
    })

    .delete((req, res)=>{
        const {id} = req.params
        lunchMenu.findByIdAndDelete(id,err=>{
            err ? res.status(500).send(err) : res.status(200).send('successfully deleted')
        })
    })

module.exports = lunchMenuRoute