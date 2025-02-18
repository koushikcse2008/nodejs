// Import mongoose
const mongoose = require('mongoose');
const Contact = require('../contacts/contact.model');

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {    
    fetchData();
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


// Function to fetch data from MongoDB
const fetchData = async () => {
    try {
      const contacts = await Contact.find();
      console.log('No of Contact:', contacts.length);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
};
