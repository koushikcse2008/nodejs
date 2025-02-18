const Category = require('./category.model');

const createCategory = async (newCategory) => {
    try {
        return await new Category(newCategory).save();
    } catch(error) {
        throw error;
    }
}

const editCategory = async (editId) => {
    try {
        return await Category.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateCategory = async (updateCategory) => {
    try {
        return await Category.findByIdAndUpdate(
            { _id: updateCategory._id },
            { cat_name: updateCategory.cat_name, cat_status: updateCategory.cat_status },
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listCategory = async () => {
    try {
        return await Category.find();
    } catch(error) {
        throw error;
    }
}

const deleteCategory = async (delId) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(delId);
        if (!deletedCategory) {
            throw new Error('Category not found');
        }
        return deletedCategory;
    } catch (error) {
        throw error;
    }
};

exports.module = {
    createCategory,
    editCategory,
    updateCategory,
    listCategory,
    deleteCategory
};


