import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  cart: [],
  selectedOption: 1,
};

export const getProducts = createAsyncThunk("api/products", async () => {
  const data = await axios("http://localhost:3000/products");
  return data?.data;
});
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.cart.some((product) => product.id === action.payload)) {
        const filterProduct = state.products.find((product) => {
          return product.id === action.payload;
        });
        filterProduct.quantity = state.selectedOption;
        state.cart = [...state.cart, filterProduct];
        console.log(filterProduct);
        console.log("added");
      } else {
        console.log("add shode");
      }
    },
    getQuantity: (state, action) => {
      console.log(action.payload);
      state.selectedOption = Number(action.payload);
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
