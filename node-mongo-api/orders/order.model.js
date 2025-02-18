const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    user_id: {
        type: String,
        required: true
    },
    order_details_id: {
        type: String,
        required: true
    },
    order_number: {
        type: String,
        required: true
    },
    order_qty: {
        type: Number,
        required: true
    },
    order_total: {
        type: Number,
        required: true
    } 
}, { timestamps: true });

module.exports = mongoose.model('Order', Order);
