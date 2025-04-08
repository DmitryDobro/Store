import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productsSlicer from './productsSlicer';
import cartSlicer from './cartSlicer';
import { productApi } from '@/api/productApi';

const rootreducer = combineReducers({
   [productApi.reducerPath]: productApi.reducer,
  productsSlicer,
  cartSlicer
});
export const store = configureStore({
  reducer: rootreducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
