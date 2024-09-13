import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  cart: [],
  inputSearchClick: false,
  showModal: false,
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
      // add product
      if (!state.cart.some((product) => product.id === action.payload)) {
        const addedProduct = state.products.find((product) => {
          return product.id === action.payload.id;
        });
        addedProduct.quantity = Number(action.payload.selectedQuantity);
        state.cart = [...state.cart, addedProduct];
        toast.success("Added to the cart!", {
          position: "top-center",
        });
      }
    },
    updateProductQuantity: (state, action) => {
      // update product
      const updatedProduct = state.cart.find((product) => {
        return product.id === action.payload.id;
      });
      updatedProduct.quantity = Number(action.payload.selectedQuantity);
      const filterCart = state.cart.filter((product) => {
        product.id !== action.payload.id;
      });
      filterCart.push(updatedProduct);
      console.log(filterCart);
      // state.cart = filterCart;
      toast.success("Update the product is successful!", {
        position: "top-center",
      });
    },
    deleteProductsFromCart: (state) => {
      // delete products from cart
      state.cart = [];
    },
    deleteProduct: (state, action) => {
      // delete product from cart and page product
      const filterProducts = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = filterProducts;
      toast.success("Remove from the cart", {
        position: "top-center",
      });
    },
    handlerInput: (state, action) => {
      state.inputSearchClick = action.payload;
    },
    handlerShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get data from server
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export const actions = productsSlice.actions;
export default productsSlice.reducer;
