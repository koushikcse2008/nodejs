const express = require('express');
const Router = express.Router();
const BrandHelper = require('./brand.service');

const createBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.createBrand(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const editBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.editBrand(req.params.id);
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

const updateBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.updateBrand(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}


const listBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.listBrand();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}


const deleteBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.deleteBrand(req.body._id);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}


Router.post('/create', createBrand);
Router.get('/edit/:id', editBrand);
Router.post('/update', updateBrand);
Router.get('/list', listBrand);
Router.post('/delete', deleteBrand);

module.exports = Router;