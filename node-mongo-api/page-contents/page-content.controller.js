const express = require("express");
const Router = express.Router();
const PageContentHelper = require("./page-content.service");

const createPageContent = (req, res, next) => {
    PageContentHelper.createPageContent(req.body)
    .then((data) => { res.status(200).json(data); })
    .catch((error) => next(error));
}

const editPageContent = (req, res, next) => {
    PageContentHelper.editPageContent(req.params.id)
    .then((data) => { 
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);
     })
    .catch((error) => next(error));
}

const updatePageContent = (req, res, next) => {
    PageContentHelper.updatePageContent(req.body)
    .then((data) => { res.status(200).json(data); })
    .catch((error) => next(error));
}

const listPageContent = (req, res, next) => {
    PageContentHelper.listPageContent()
    .then((data) => {  
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);     
    })
    .catch((error) => next(error));
}

Router.post('/create', createPageContent); 
Router.get('/edit/:id', editPageContent);
Router.post('/update', updatePageContent);
Router.get('/list', listPageContent);

module.exports = Router;

