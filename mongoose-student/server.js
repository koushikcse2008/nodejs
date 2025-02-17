require('dotenv').config();
require('./_helpers/db');
const express = require('express');
const BodyParser = require('body-parser');
const StudentsRouter = require('./students/student.controller');

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/students', StudentsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started at http://localhost:'+PORT);
});

