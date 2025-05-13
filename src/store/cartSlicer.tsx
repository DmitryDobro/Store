import Product from '@/shared/models/IProduct';
import {createSlice} from '@reduxjs/toolkit';

interface CartProduct extends Product {
  quantity: number;
  totalPrice: number;
}

const initialState: {selectProducts: CartProduct[]; price: number} = {
  selectProducts: [],
  price: 0,
};
function getOnePrice(item: CartProduct) {
  return item.prise.salePrise || item.prise.mainPrise;
}
function getTotalPrice(state:{selectProducts: CartProduct[]; price: number}) {
  return (state.price = state.selectProducts.reduce((acc: number, cur: {totalPrice: number}) => acc + cur.totalPrice, 0));
}
const cartSlicer = createSlice({
  name: 'cartSlicer',
  initialState,
  reducers: {
    addProduct(state, action) {
      const item = state.selectProducts.find(product => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.prise.salePrise ? (item.totalPrice += item.prise.salePrise) : (item.totalPrice += item.prise.mainPrise);
        getTotalPrice(state);
      } else {
        state.selectProducts.push({...action.payload, quantity: 1, totalPrice: getOnePrice(action.payload)});
        getTotalPrice(state);
      }
    },
    removeProduct(state, action) {
      const item = state.selectProducts.find(product => product.id === action.payload.id);
      if (item?.quantity == 1) {
        state.selectProducts = state.selectProducts.filter(product => product.id !== action.payload.id);
        getTotalPrice(state);
      } else if (item) {
        item.quantity -= 1;
        item.prise.salePrise ? (item.totalPrice -= item.prise.salePrise) : (item.totalPrice -= item.prise.mainPrise);
        getTotalPrice(state);
      }
    },
    removeAll(state, action){
      state.selectProducts = state.selectProducts.filter(product => product.id !== action.payload.id);
    }
  },
});
export const {addProduct, removeProduct,removeAll} = cartSlicer.actions;
export default cartSlicer.reducer;
