const ProductModel = require('../models/ProductModel');

module.exports = {
  async createProduct(payload) {
    if (!payload.name || payload.price == null) {
      throw new Error('Name and price are required');
    }

    payload.price = Number(payload.price);
    return ProductModel.createProduct(payload);
  },

  getAllProducts() {
    return ProductModel.getAllProducts();
  },

  async getProductById(id) {
    const product = await ProductModel.getProductById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  },

  updateProduct(id, payload) {
    return ProductModel.updateProduct(id, payload);
  },

  deleteProduct(id) {
    return ProductModel.deleteProduct(id);
  }
};
