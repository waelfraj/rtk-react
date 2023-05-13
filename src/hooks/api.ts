import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IProducts from "../components/products.interface";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    addNewPoduct: builder.mutation({
      query: (product: IProducts) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddNewPoductMutation } = productApi;
