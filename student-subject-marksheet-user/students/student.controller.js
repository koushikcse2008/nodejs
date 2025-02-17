const express = require('express');
const Router = express.Router();
const StudentHelper = require('./student.service');

const allDetails = (req, res, next) => {
    StudentHelper.getAllDetails(req.body)
    .then((data) => { 
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

Router.get('/alldetails', allDetails);


module.exports = Router;