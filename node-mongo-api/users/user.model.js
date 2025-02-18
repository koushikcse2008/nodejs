const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema(
    { 
        user_type: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        user_email: {
            type: String,
            required: true
        },
        user_password: {
            type: String,
            required: true
        },
        user_phone: {
            type: String,
            required: false
        },
        user_addr: {
            type: String
        },
        user_country: {
            type: String
        },
        user_state: {
            type: String
        },
        user_city: {
            type: String
        },
        user_zipcode: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', Users);



