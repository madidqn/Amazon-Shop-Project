import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 6,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("slaam");
      state.value += 1;
    },
  },
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;
