import { createSlice } from "@reduxjs/toolkit";

// export const getRegisterStorage = () => {
//   const response = localStorage.getItem("user");
//   const res = JSON.parse(response);
//   return res;
// };

const adminSlice = createSlice({
  name: "admin",
  initialState: { isAdmin: false },
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    deleteAdmin: (state) => {
      state.isAdmin = false;
    },
  },
});

export const adminSliceAction = adminSlice.actions;
export const adminSliceReducer = adminSlice.reducer;
