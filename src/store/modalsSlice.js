import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputSearchClick: false,
  showModalLanguage: false,
  showModalAccount: false,
  burgerMenu: false,
  showModalStars: false,
  showModalShopItems: false,
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
    handlerShowModalStars: (state, action) => {
      state.showModalStars = action.payload;
    },
    handlerShowModalShopItems: (state, action) => {
      state.showModalShopItems = action.payload;
    },
  },
});

export const actionsModals = modalsSlice.actions;
export default modalsSlice.reducer;
