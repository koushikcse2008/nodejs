const express = require('express');
const Router = express.Router();
const UserHelper = require('./user.service');

const registerUser = (req, res, next) => {
    UserHelper.registerUser(req.body)
    .then((data) => { 
        //console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const getUser = (req, res, next) => {
    UserHelper.getUser()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => next(error));
}

Router.post('/register', registerUser);
Router.get('/get', getUser);

module.exports = Router;