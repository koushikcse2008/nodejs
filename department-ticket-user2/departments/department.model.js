const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const department = new Schema({
    name: {
        type: String,
        required: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Department', department);