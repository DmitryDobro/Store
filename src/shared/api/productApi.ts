import Product from '@/shared/models/IProduct';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  tagTypes: ['Product'],
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products/`,
    }),
    getProductsByGender: builder.query<Product[], string | undefined>({
      query: gender => `/products?gender=${gender}`,
    }),
  }),
});

export const {useGetProductsQuery, useGetProductsByGenderQuery} = productApi;
