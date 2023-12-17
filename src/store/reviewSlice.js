import { createSlice } from "@reduxjs/toolkit";

export const getReviewStorage = () => {
  const response = localStorage.getItem("review");
  const res = JSON.parse(response);
  return res;
};

const initialState = {
  result: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.result.push(action.payload);
      console.log(state);
      localStorage.setItem("review", JSON.stringify(state.result));
    },
  },
});

export const reviewSliceAction = reviewSlice.actions;
export const reviewSliceReducer = reviewSlice.reducer;
