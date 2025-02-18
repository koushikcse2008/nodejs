const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Brand = new Schema({
    brand_name: {
        type: String,
        required: true
    },
    brand_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Brand', Brand);