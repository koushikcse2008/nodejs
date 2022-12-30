const express = require("express");
const coursesRouter = require("./routes/courses");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

app.use(bodyParser.json());

app.use("/api/v1/courses", coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("DB Connection successfully made");
});

app.listen(process.env.PORT, () => {
    console.log("Server started in port 4000");
});


