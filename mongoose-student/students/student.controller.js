const express = require('express');
const Router = express.Router();
const StudentHelper = require('./student.service');

const getQuery = (req, res, next) => {
    StudentHelper.getData(req.body)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => next(error));
}


Router.get('/getall', getQuery);

module.exports = Router;
