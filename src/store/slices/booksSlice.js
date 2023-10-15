import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: [],
bookDetails : {}
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    setbookData(state, value) {
      state.bookData = value.payload;
    },
    setBookDetails(state , value) {
        state.bookDetails = value.payload
    }

  },
});

export const {
   
    setbookData,
    setBookDetails
} = bookSlice.actions;

export default bookSlice.reducer;