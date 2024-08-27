import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  value: 90,
};

export const getProducts = createAsyncThunk("api/products", async () => {
  const data = await axios("http://localhost:3000/products");
  return data.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
