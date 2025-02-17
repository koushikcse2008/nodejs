const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Student = new Schema({
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
    dob: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    zipcode: {
        type: String
    },
    landmark: {
        type: String
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = Mongoose.model('Students', Student);

