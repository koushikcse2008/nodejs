const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contact = new Schema({
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
    subject: {
        type: String
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contact);

/*{
"fname": "John 1",
"lname": "Doe 1",
"email": "john1@email.com",
"subject": "Test 1 subject",
"message": "Test 1 message"
}*/