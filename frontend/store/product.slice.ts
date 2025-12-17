import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductAPI } from '../routes/product.routes';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => ProductAPI.getAll()
);

export const createProduct = createAsyncThunk(
  'products/create',
  async (payload: any) => ProductAPI.create(payload)
);

export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, data }: any) => ProductAPI.update(id, data)
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (id: number) => {
    await ProductAPI.remove(id);
    return id;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [] as any[],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, s => {
        s.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload;
      })
      .addCase(createProduct.fulfilled, (s, a) => {
        s.list.unshift(a.payload);
      })
      .addCase(updateProduct.fulfilled, (s, a) => {
        const i = s.list.findIndex(p => p.id === a.payload.id);
        if (i !== -1) s.list[i] = a.payload;
      })
      .addCase(deleteProduct.fulfilled, (s, a) => {
        s.list = s.list.filter(p => p.id !== a.payload);
      });
  }
});

export default productSlice.reducer;
