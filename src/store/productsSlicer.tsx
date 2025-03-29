import Product from '@/models/IProduct';
import {createSlice} from '@reduxjs/toolkit';

const initialState: {products: Product[]} = {
  products: [],
};

const productsSlicer = createSlice({
  name: 'productsSlicer',
  initialState,
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
  },
});
export const {getProduct} = productsSlicer.actions;
export default productsSlicer.reducer;
