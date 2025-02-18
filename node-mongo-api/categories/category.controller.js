const express = require('express');
const Router = express.Router();
const CategoryHelper = require('./category.service');

const createCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.createCategory(req.body);
        const return_data = {
            status: 200,
            message: "Successfully added.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const editCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.editCategory(req.params.id);
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.updateCategory(req.body);
        const return_data = {
            status: 200,
            message: "Successfully updated.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const listCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.listCategory();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.deleteCategory(req.body._id);
        const return_data = {
            status: 200,
            message: "Successfully deleted.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error); 
    }
}

Router.post('/create', createCategory);
Router.get('/edit/:id', editCategory);
Router.post('/update', updateCategory);
Router.get('/list', listCategory);
Router.post('/delete', deleteCategory);

module.exports = Router;
