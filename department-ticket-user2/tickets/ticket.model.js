const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticket = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["open", "inprogress", "resolved", "closed"],
        default: "open"
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
    departmentId: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', ticket);