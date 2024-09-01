import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 6,
  id: null,
};
// const getId = (state, action) => {
//   console.log(Number(state.value + action.payload));
// };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getId: (state, action) => {
      console.log(Number(state.value + action.payload));
    },
  },
});

export const actions = cartSlice.actions;
export default cartSlice.reducer;
