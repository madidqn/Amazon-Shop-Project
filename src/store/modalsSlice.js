import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModalLanguage: false,
  showModalAccount: false,
  burgerMenu: false,
  inputSearchClick: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    handlerInput: (state, action) => {
      state.inputSearchClick = action.payload;
    },
    handlerShowModalLanguage: (state, action) => {
      state.showModalLanguage = action.payload;
    },
    handlerShowModalAccount: (state, action) => {
      state.showModalAccount = action.payload;
    },
    handlerBurgerMenu: (state, action) => {
      state.burgerMenu = action.payload;
    },
  },
});

export const actionsModals = modalsSlice.actions;
export default modalsSlice.reducer;
