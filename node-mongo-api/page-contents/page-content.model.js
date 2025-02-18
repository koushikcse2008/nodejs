const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageContent = new Schema({
    page_name: {
        type: String,
        enum: ['home', 'about', 'services', 'faq', 'portfolio', 'terms', 'privacy', 'refund'],
        default: 'home',
        required: true
    },
    page_title : {
        type: String,
        required: true
    },
    page_content1: {
        type: String,
        required: true
    },
    page_content2: {
        type: String,
        required: false
    },
    page_img1: {
        type: String,
        required: false
    },
    page_img2: {
        type: String,
        required: false
    },
    page_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
        required: true
    }

}, { timestamps: true });


module.exports = mongoose.model('page-content', PageContent);



// {
//     "page_name": "home",
//     "page_title": "Section 1",
//     "page_content1": "section 1 content",
//     "page_content2": "section 1 content",
//     "page_img1": "section10.jpg",
//     "page_img2": "section11.jpg",
//     "page_status": "active"
// }