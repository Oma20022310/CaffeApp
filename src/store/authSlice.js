import { createSlice } from "@reduxjs/toolkit";

export const getRegisterStorage = () => {
  const response = localStorage.getItem("user");
  const res = JSON.parse(response);
  return res;
};

const auth = JSON.parse(localStorage.getItem('isAuth'));

const authSlice = createSlice({
  name: "auth",
  initialState: auth || {
    isAuth: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
      localStorage.setItem("isAuth", JSON.stringify(action.payload));
    },
    deleteAuth: (state) => {
      state.isAuth = false;
      localStorage.removeItem("isAuth");
    },
  },
});

export const authSliceAction = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
