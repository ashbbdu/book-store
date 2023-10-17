import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import booksSlice from "./slices/booksSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer  = combineReducers({
    auth : authSlice,
    book : booksSlice,
    cart : cartSlice
})

export default rootReducer