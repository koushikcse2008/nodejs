const express = require('express');
const Router = express.Router();
const ContactHelper = require('./contact.service');

const createContact = (req, res, next) => {

    ContactHelper.createContact(req.body)
    .then((data) => { 
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const updateContact = (req, res, next) => {

    ContactHelper.updateContact(req.body)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const listContact = (req, res, next) => {
    
    ContactHelper.listContact()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => next(error));
}

const deleteContact = (req, res, next) => {

    ContactHelper.deleteContact(req.body._id)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => next(error));
}

Router.post('/create', createContact);
Router.post('/update', updateContact);
Router.get('/list', listContact);
Router.post('/delete', deleteContact);

module.exports = Router;