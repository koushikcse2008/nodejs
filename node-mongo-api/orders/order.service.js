const Order = require('./order.model');

const createOrder = async (newOrder) => {
    try {
        return await new Order(newOrder).save();
    } catch(error) {
        throw error;
    }
}

const editOrder = async (editId) => {
    try {
        return await Order.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateOrder = async (updateOrder) => {
    try {
        return await Order.findByIdAndUpdate(
            { _id: updateOrder._id },
            {  },
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listOrder = async () => {
    try {
        return await Order.find();
    } catch(error) {
        throw error;
    }
}

const deleteOrder = async (delId) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(delId);
        if (!deletedOrder) {
            throw new Error('Order not found');
        }
        return deletedOrder;
    } catch (error) {
        throw error;
    }
};

exports.module = {
    createOrder,
    editOrder,
    updateOrder,
    listOrder,
    deleteOrder
};
