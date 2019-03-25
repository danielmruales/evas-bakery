const express = require("express")
const breakfastMenuRoute = express.Router()
const breakfastMenu =require('../models/breakfastMenuSchema')

breakfastMenuRoute.route('/')

    .get((req,res)=>{
        breakfastMenu.find((err, found)=>{
            err ? res.status(500).send(err) : res.status(200).send(found)
        })
    })

    .post((req, res)=>{
        const newsaved = new breakfastMenu(req.body)
        newsaved.save(err=>{
            err ? res.status(500).send(err) : res.status(200).send(newsaved)
        })
    })

breakfastMenuRoute.route('/:id')

    .get((req, res)=>{
        const {id} = req.params
        breakfastMenu.findById(id,(err, found)=>{
            err ? res.status(500).send(err) : res.status(500).send(found)
        })
    })

    .put((req, res)=>{
        const {id} = req.params
        const body = req.body
        breakfastMenu.findByIdAndUpdate(id, body, {new:true},(err, updated)=>{
            err ? res.status(500).send(err) : res.status(200).send(updated)
        })
    })

    .delete((req, res)=>{
        const {id} = req.params
        breakfastMenu.findByIdAndDelete(id,err=>{
            err ? res.status(500).send(err) : res.status(200).send('successfully deleted')
        })
    })

module.exports = breakfastMenuRoute    