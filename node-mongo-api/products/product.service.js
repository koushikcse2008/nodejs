const Product = require('./product.model');

const createProduct = async (newProduct) => {
    try {
        return await new Product(newProduct).save();
    } catch(error) {
        throw error;
    }
}

const editProduct = async (productId) => {
    try {
        return await new findById(productId);
    } catch(error) {
        throw error;
    }
}

const updateProduct = async (updateProduct) => {
    try {
        return await new Product.findByIdAndUpdate(
            { _id: updateProduct._id }, 
            { 
                cat_id: updateProduct.cat_id,
                brand_id: updateProduct.brand_id,
                prod_name: updateProduct.prod_name,
                prod_slug: updateProduct.prod_slug,
                prod_short_desc: updateProduct.prod_short_desc,
                prod_desc: updateProduct.prod_desc,
                prod_inventory: updateProduct.prod_inventory,
                prod_price: updateProduct.prod_price,
                prod_status: updateProduct.prod_status,
            }, 
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listProduct = async () => {
    try {
        return await new Product.find();
    } catch(error) {
        throw error;
    }
}

const deleteProduct = async (delId) => {
    try {
        return await new Product.findByIdAndDelete(delId);
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createProduct,
    editProduct,
    updateProduct,
    listProduct,
    deleteProduct
};


