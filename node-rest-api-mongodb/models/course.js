const mongoose = require("mongoose");

const Course = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    videos: Number,
    active: Boolean
});

module.exports = mongoose.model("Courses", Course);