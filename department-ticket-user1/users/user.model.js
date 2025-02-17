const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
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
    },
    password: {
        type: String
    },
    userType: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', user);