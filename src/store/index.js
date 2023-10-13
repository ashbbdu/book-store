import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import booksSlice from "./slices/booksSlice";

const rootReducer  = combineReducers({
    auth : authSlice,
    book : booksSlice
})

export default rootReducer