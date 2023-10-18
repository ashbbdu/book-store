import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartData :  [],

};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCartData(state, value) {
      state.cartData =  [...state.cartData.filter(res => res._id  !== value.payload._id) , value.payload];
    },
    removeCart(state , value) {
        state.cartData =   state.cartData.filter(res => res._id  !== value.payload._id)
    }
  },
});

export const {
    setCartData,
    removeCart
} = cartSlice.actions;

export default cartSlice.reducer;