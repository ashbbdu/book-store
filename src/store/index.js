import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import booksSlice from "./slices/booksSlice";
import cartSlice from "./slices/cartSlice";
import ratingSlice from "./slices/ratingSlice";

const rootReducer  = combineReducers({
    auth : authSlice,
    book : booksSlice,
    cart : cartSlice,
    rating : ratingSlice
})

export default rootReducer