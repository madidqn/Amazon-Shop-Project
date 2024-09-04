import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  cart: [],
  selectedQuantity: 1,
  added: false,
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
        filterProduct.quantity = state.selectedQuantity;
        state.cart = [...state.cart, filterProduct];
        state.added = true;
        console.log("added");
      } else {
        console.log("add shode");
      }
    },
    getQuantity: (state, action) => {
      state.selectedQuantity = Number(action.payload);
    },
    deleteProduct: () => {
      console.log("salam mahdieh");
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
