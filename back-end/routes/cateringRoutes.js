const express = require('express')
const cateringRoute = express.Router()

const Customer = require('../models/cateringSchema')

cateringRoute.route('/')

    .get((req, res, next) => {
        Customer.find({user: req.user._id},(err, customers) => {

            if(err){
                return res.status(500).next(err)
            }
            return res.status(200).send(customers)
        })
    })

    .post((req, res, next) => {
        const newCustomer = new Customer(req.body)
        newCustomer.user = req.user._id   
        newCustomer.save(err => {

            if(err) return res.status(501).send(err)
            return res.status(200).send(newCustomer)
        })
    })

cateringRoute.route('/:_id')

    .get((req, res) => {
        Customer.findOne({_id: req.params._id, user: req.user._id},req.params._id, (err, customer) => {
            
            if(err) return res.status(500).send(err)
                return res.status(200).send(customer)
        })
    })

    .put((req,res) => {
        Customer.findOneAndUpdate({_id: req.params._id}, {_id: req.params._id, user: req.user._id}, req.body, {new: true}, (err, customer) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send({
                msg: 'Successfully updated ' `${customer.fullName}` ,
                customer: customer

            })
        })
    })

    .delete((req, res) => {
        Customer.findOneAndDelete({_id: req.params._id}, (err, customer) => {
            if(err) return res.status(500).send(err)
                return res.status(200).send(`You deleted ${customer.fullName}` )
        } )
    })


module.exports = cateringRoute