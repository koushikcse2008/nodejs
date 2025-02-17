const express = require('express');
const Router = express.Router();
const UserHelper = require('./user.service');

const registerUser = (req, res, next) => {
    //console.log(req.body);
    UserHelper.registerUser(req.body)
    .then((data) => { 
        //console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const loginUser = (req, res, next) => {
    //console.log(req.body);
    UserHelper.loginUser(req.body)
    .then((data) => { 
        //console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

Router.post('/register', registerUser);
Router.post('/login', loginUser);

module.exports = Router;