const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marksheet = new Schema({
    student_id: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    subject_id: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    marks_obtained: {
        type: String
    },
    grade: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Marksheet', marksheet);