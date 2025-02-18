const express = require('express');
const Router = express.Router();
const OrderHelper = require('./order.service');

const createOrder = async (req, res, next) => {
    try {
        const data = await OrderHelper.createOrder(req.body);
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

const editOrder = async (req, res, next) => {
    try {
        const data = await OrderHelper.editOrder(req.params.id);
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

const updateOrder = async (req, res, next) => {
    try {
        const data = await OrderHelper.updateOrder(req.body);
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

const listOrder = async (req, res, next) => {
    try {
        const data = await OrderHelper.listOrder();
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

const deleteOrder = async (req, res, next) => {
    try {
        const data = await OrderHelper.deleteOrder(req.body._id);
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

Router.post('/create', createOrder);
Router.get('/edit/:id', editOrder);
Router.post('/update', updateOrder);
Router.get('/list', listOrder);
Router.post('/delete', deleteOrder);

module.exports = Router;
