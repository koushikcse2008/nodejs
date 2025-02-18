require('dotenv').config();
require('./_helpers/db');
const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const contactRouter = require('./contacts/contact.controller');
const pageContentRouter = require('./page-contents/page-content.controller');
const brandRouter = require('./brands/brand.controller');
const categoryRouter = require('./categories/category.controller');
const userRouter = require('./users/user.controller');
const orderRouter = require('./orders/order.controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(cors({
//   origin:  '*', // allow to server to accept request from different origin
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept, currency, timezone, country",
//   preflightContinue: false,
//   optionsSuccessStatus: 204
// }));

app.use('/contact', contactRouter);
app.use('/page-content', pageContentRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);

app.listen("4000", () => {
    console.log('Server is running in 4000 port');
});
