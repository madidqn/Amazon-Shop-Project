import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { produce } from "immer";

const initialState = {
  products: [],
  value: 6,
  getId: null,
};

export const getProducts = createAsyncThunk("api/products", async () => {
  const data = await axios("http://localhost:3000/products");
  return data?.data;
});

// const getId = (state, action) => {
//   const filterProducts = state.products.filter(
//     (product) => product.id === action.payload
//   );
//   console.log(Number(state.value + action.payload));
//   console.log(typeof filterProducts);
// };
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getId: (state, action) => {
      const ff = Number(state.value) + Number(action.payload);
      console.log(ff);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export const actions = productsSlice.actions;
export default productsSlice.reducer;
