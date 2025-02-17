const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {    
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });