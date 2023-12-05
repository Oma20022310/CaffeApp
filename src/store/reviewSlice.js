import { createSlice } from "@reduxjs/toolkit";

export const getReviewStorage = () => {
  const response = localStorage.getItem("review");
  const res = JSON.parse(response);
  return res;
};

const initialState = {
  rating: 0,
  comment: "",
  isReview: false,
  id: "",
};

// const initialState = {
//   result: [],
// };

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.rating = action.payload.rating;
      state.comment = action.payload.comment;
      state.isReview = action.payload.isReview;
      state.id = action.payload.id;
      console.log(state);
      localStorage.setItem("review", JSON.stringify(state.result));
    },
  },
});

export const reviewSliceAction = reviewSlice.actions;
export const reviewSliceReducer = reviewSlice.reducer;
