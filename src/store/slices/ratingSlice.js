import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 ratingData :  [],

};

const ratingSlice = createSlice({
  name: "rating",
  initialState: initialState,
  reducers: {
    setRatingData(state, value) {
      state.ratingData =  value.payload  ;
    },
   
  },
});

export const {
    setRatingData,

} = ratingSlice.actions;

export default ratingSlice.reducer;