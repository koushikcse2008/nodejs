const User = require('./user.model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const registerUser = async (newUser) => {
        try {
            //console.log("hi")
            newUser.password = generatePasswordHash(newUser.password);
            return await new User(newUser).save();           
          } catch (error) {
            throw error;
          }
}

const loginUser = async (userData) => {
  try {
      const user = await User.findOne({ email: userData.email });
      if(user && user._id) {
        //email exist

        const matchPassword = bcrypt.compareSync(userData.password, user.password);
        if(matchPassword) {

         const token = generateJwtToken(user._id, user);
         return token;

        } else {
          throw "Password does not match";
        }
        
      } else {
        throw "Email not exist";
      }

      //newUser.password = generatePasswordHash(userData.password);
      //return await new User(newUser).save();           
    } catch (error) {
      throw error;
    }
}

const generatePasswordHash = (password) => {
  const TEN = 10;
  const salt = bcrypt.genSaltSync(TEN);
  return bcrypt.hashSync(password, salt);
};

// const comparePasswords = async (plaintextPassword, hashedPassword) => {
//   try {
//     const isMatch = await bcrypt.compare(plaintextPassword, hashedPassword);
//     if (isMatch) {
//       console.log('Password is correct!');
//     } else {
//       console.log('Password is incorrect.');
//     }
//   } catch (error) {
//     console.error('Error comparing passwords', error);
//   }
// };

//node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

const generateJwtToken = async (userId, user) => {
  let token = jwt.sign(
    {
      id: userId,
      _id: userId,
      fname: _.get(user, "fname", ""),
      lname: _.get(user, "lname", ""),
      email: _.get(user, "email", "")
    },
    "f7c2e2bba6865d3d4faec384c71c93cf00b9e32c0b6252adc6221c971a66d924"
  );
  return {
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
}

//validate fields
//token expire time
//token compare
//middleware token checking