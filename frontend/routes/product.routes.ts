import { api } from '../utils/api';

export const ProductAPI = {
  getAll: () => api.get('/products'),
  getOne: (id: number) => api.get(`/products/${id}`),
  create: (data: any) => api.post('/products', data),
  update: (id: number, data: any) => api.put(`/products/${id}`, data),
  remove: (id: number) => api.delete(`/products/${id}`)
};
