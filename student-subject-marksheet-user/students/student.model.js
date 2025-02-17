const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', student);