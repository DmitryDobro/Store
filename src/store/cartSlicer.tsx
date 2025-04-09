import Product from '@/shared/models/IProduct';
import {createSlice} from '@reduxjs/toolkit';

interface CartProduct extends Product {
  quantity: number;
}
const initialState: {selectProducts: CartProduct[]} = {
  selectProducts: [],
};

const cartSlicer = createSlice({
  name: 'cartSlicer',
  initialState,
  reducers: {
    getSelectProducts(state, action) {
      state.selectProducts = action.payload;
    },
    addProduct(state, action) {
      const item = state.selectProducts.find(product => product.id === action.payload.id);
      console.log(action.payload);
      if (item) {
        item.quantity += 1;
      } else {
        console.log({...action.payload, quantity: 1});

        state.selectProducts.push({...action.payload, quantity: 1});
      }
    },
    removeProduct(state, action) {
      state.selectProducts = state.selectProducts.filter(product => product.id !== action.payload.id);
    },
    changeQuantity(state, action) {
      const item = state.selectProducts.find(product => product.id === action.payload.id);
      if (item?.quantity == 1) {
        state.selectProducts = state.selectProducts.filter(product => product.id !== action.payload.id);
      } else if (item) {
        item.quantity -= 1;
      }
      // state.selectProducts = state.selectProducts.filter(product => product.id !== action.payload.id);
    },
  },
});
export const {getSelectProducts, addProduct, removeProduct, changeQuantity} = cartSlicer.actions;
export default cartSlicer.reducer;
