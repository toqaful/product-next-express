const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async createProduct(payload) {
    if (!payload.name || payload.price == null) {
      throw new Error('Name and price are required');
    }

    return prisma.product.create({
      data: {
        name: payload.name,
        description: payload.description || null,
        price: Number(payload.price)
      }
    });
  },

  async getAllProducts() {
    return prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
  },

  async getProductById(id) {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) }
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  },

  async updateProduct(id, payload) {
    return prisma.product.update({
      where: { id: Number(id) },
      data: {
        name: payload.name,
        description: payload.description,
        price: payload.price != null ? Number(payload.price) : undefined
      }
    });
  },

  async deleteProduct(id) {
    return prisma.product.delete({
      where: { id: Number(id) }
    });
  }
};
