const Brand = require('./brand.model');

const createBrand = async (newBrand) => {
    try {
        return await new Brand(newBrand).save();
    } catch(error) {
        throw error;
    }
}

const editBrand = async (editId) => {
    try {
        return await Brand.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateBrand = async (updateBrand) => {
    try {
        Brand.findOneAndUpdate(
            { _id: updateBrand._id },
            { brand_name: updateBrand.brand_name, brand_status: updateBrand.brand_status },
            { new: false }
        );
        return await Brand.find();
    } catch(error) {
        throw error;
    }
}

const listBrand = async () => {
    try {
        return await Brand.find();
    } catch(error) {
        throw error;
    }
}

const deleteBrand = async (delId) => {
    try {
            const deletedBrand = await Brand.findByIdAndDelete(delId);
            if (!deletedBrand) {
                throw new Error('Category not found');
            }
            return deletedBrand;
        } catch (error) {
            throw error;
        }
}

module.exports = {
    createBrand,
    editBrand,
    updateBrand,
    listBrand,
    deleteBrand
}