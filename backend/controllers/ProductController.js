const ProductService = require('../services/ProductService');
const Response = require('../src/utils/response');

module.exports = {
  async create(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(
        Response.success('Product created successfully', product)
      );
    } catch (err) {
      res.status(400).json(
        Response.error(err.message)
      );
    }
  },

  async findAll(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(
        Response.success('Products retrieved successfully', products)
      );
    } catch (err) {
      res.status(500).json(
        Response.error('Failed to fetch products' + err)
      );
    }
  },

  async findOne(req, res) {
    try {
      const id = Number(req.params.id);
      const product = await ProductService.getProductById(id);
      res.status(200).json(
        Response.success('Product retrieved successfully', product)
      );
    } catch (err) {
      res.status(404).json(
        Response.error(err.message)
      );
    }
  },

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const product = await ProductService.updateProduct(id, req.body);
      res.status(200).json(
        Response.success('Product updated successfully', product)
      );
    } catch (err) {
      res.status(400).json(
        Response.error(err.message)
      );
    }
  },

  async remove(req, res) {
    try {
      const id = Number(req.params.id);
      await ProductService.deleteProduct(id);
      res.status(200).json(
        Response.success('Product deleted successfully')
      );
    } catch (err) {
      res.status(400).json(
        Response.error(err.message)
      );
    }
  }
};
