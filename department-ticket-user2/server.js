require('dotenv').config();
require('./_helpers/db');

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./users/user.controller');
const departmentRouter = require('./departments/department.controller');
const ticketRouter = require('./tickets/ticket.controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', userRouter);
app.use('/department', departmentRouter);
app.use('/ticket', ticketRouter);

app.listen("4000", (req, res) => {
    console.log('Server is running is 4000 ports');
});


