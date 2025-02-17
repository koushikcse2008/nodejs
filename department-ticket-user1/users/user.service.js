const User = require('./user.model');
const bcrypt = require("bcryptjs");

const registerUser = async (newUser) => {
        try {
            //console.log("hi")
            newUser.password = generatePasswordHash(newUser.password);
            return await new User(newUser).save();           
          } catch (error) {
            throw error;
          }
}

const getUser = async () => {
  try {
    return await User.find();
  }
  catch(error) {
    throw(error);
  }
}

const generatePasswordHash = (password) => {
  const TEN = 10;
  const salt = bcrypt.genSaltSync(TEN);
  return bcrypt.hashSync(password, salt);
};

module.exports = {
  registerUser,
  getUser,
}