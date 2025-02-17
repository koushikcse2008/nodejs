require('dotenv').config();
require('./_helpers/db');
const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const contactRouter = require('./contacts/contact.controller');

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

app.listen("4000", () => {
    console.log('Server is running in 4000 port');
});

