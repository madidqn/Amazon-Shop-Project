import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import modalsReducer from "./modalsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modals: modalsReducer,
  },
});
