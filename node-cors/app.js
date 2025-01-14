const cors = require('cors');
const express = require('express');

const app = express();
const port = 4000;

app.use(cors());

app.get('/cors',(req, res) => {
    res.json({messgae: 'This is cors message.'});
});

app.listen(port, () => {
    console.log("server started: "+port);
});

