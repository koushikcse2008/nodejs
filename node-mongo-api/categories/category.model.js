const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new Schema({
    cat_name: {
        type: String,
        required: true
    },
    cat_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Categories', Categories);