import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartData : null,

};

const cartSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCartData(state, value) {
      state.cartData = value.payload;
    },
  },
});

export const {
    setCartData
} = cartSlice.actions;

export default cartSlice.reducer;