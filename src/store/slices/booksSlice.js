import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: [],

};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    setbookData(state, value) {
      state.bookData = value.payload;
    },

  },
});

export const {
     setSignupData, 
    setLoading, 
    setToken,
    setbookData
} = bookSlice.actions;

export default bookSlice.reducer;