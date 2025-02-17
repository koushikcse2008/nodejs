const express = require('express');
const Router = express.Router();
const TicketHelper = require('./ticket.service');

const createTicket = (req, res, next) => {
    TicketHelper.createTicket(req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => next(error));
}

const getTicket = (req, res, next) => {
    TicketHelper.getTicket()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => next(error));
}

const getAllTicket = (req, res, next) => {
    TicketHelper.getAllTicket(req.body.ticketId)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => next(error));
}

Router.post('/create', createTicket);
Router.get('/get', getTicket);
Router.get('/getall', getAllTicket);

module.exports = Router;