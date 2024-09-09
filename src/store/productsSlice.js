import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  cart: [],
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
      console.log(action.payload.id, action.payload.selectedQuantity);
      if (!state.cart.some((product) => product.id === action.payload)) {
        const filterProduct = state.products.find((product) => {
          return product.id === action.payload.id;
        });
        filterProduct.quantity = Number(action.payload.selectedQuantity);
        state.cart = [...state.cart, filterProduct];
      } else {
        console.log("add shode");
      }
    },
    deleteAllProductsAtCart: (state) => {
      // done
      state.cart = [];
    },
    deleteProductAtCart: (state, action) => {
      // done
      const filterProducts = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = filterProducts;
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
