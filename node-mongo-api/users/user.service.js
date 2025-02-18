const User = require('./user.model');

const createUser = async (newUser) => {
    try {
        return await new User(newUser).save();
    } catch(error) {
        throw error;
    }
}

const editUser = async (userId) => {
    try {
        return await User.findById(userId);
    } catch(error) {
        throw error;
    }
}

const updateUser = async (updateUser) => {
    try {
        return await User.findByIdAndUpdate(
            { _id: updateUser._id },
            { 
                user_type: updateUser.user_type, 
                user_name: updateUser.user_name, 
                user_email: updateUser.user_email, 
                user_password: updateUser.user_password, 
                user_phone: updateUser.user_phone, 
                user_addr: updateUser.user_addr, 
                user_country: updateUser.user_country, 
                user_state: updateUser.user_state, 
                user_city: updateUser.user_city, 
                user_zipcode: updateUser.user_zipcode, 
            },
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listUser = async () => {
    try {
        return await User.find();
    } catch(error) {
        throw error;
    }
}

const deleteUser = async (delId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(delId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    editUser,
    updateUser,
    listUser,
    deleteUser
};