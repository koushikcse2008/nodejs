const Mongoose = require('mongoose');

Mongoose.connect(process.env.MONGO_DB_URL)
.then(() => {
    console.warn('Successfully Connected');
})
.catch((error) => {
    console.log(error)
});

