// Import mongoose
const mongoose = require('mongoose');
const Contact = require('../contacts/contact.model');

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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

// // Example schema and model
// const contactSchema = new mongoose.Schema({
//   fname: String,
//   lname: String,
//   email: String,
//   phone: String,
//   subject: String,
//   message: String
// });

// // Model
// const User = mongoose.model('Contact', contactSchema);

// // Example of creating and saving a new user
// const newUser = new User({
//   name: "John Doe",
//   email: "john@example.com",
//   age: 30
// });

// newUser.save()
//   .then((user) => {
//     console.log("User saved:", user);
//   })
//   .catch((err) => {
//     console.error("Error saving user:", err);
//   });


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_DB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// });
// mongoose.Promise = global.Promise;


