import Product from '@/models/IProduct';
import {createSlice} from '@reduxjs/toolkit';

const initialState: {selectProducts: Product[]} = {
  selectProducts: [],
};

const cartSlicer = createSlice({
  name: 'cartSlicer',
  initialState,
  reducers: {
    getSelectProducts(state, action) {
      state.selectProducts = action.payload;
    },
  },
});
export const {getSelectProducts} = cartSlicer.actions;
export default cartSlicer.reducer;
