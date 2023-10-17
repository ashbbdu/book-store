import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartData : [],

};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCartData(state, value) {
      state.cartData = [...state.cartData , value.payload];
    },
  },
});

export const {
    setCartData
} = cartSlice.actions;

export default cartSlice.reducer;