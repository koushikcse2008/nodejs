const express = require('express');
const Router = express.Router();
const DepartmentHelper = require('./department.service');

const createDepartment = (req, res, next) => {
    DepartmentHelper.createDepartment(req.body)
    .then((data) => { 
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const getDepartment = (req, res, next) => {
    DepartmentHelper.getDepartment(req.body)
    .then((data) => { 
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

Router.get('/get', getDepartment);
Router.post('/create', createDepartment);


module.exports = Router;