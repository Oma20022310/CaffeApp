import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, Register } from "../types/types";

export const getRegisterStorage = (): Register | null => {
  const response = localStorage.getItem("user");
  if (response) {
    const parsedData: Register = JSON.parse(response);
    return parsedData;
  }
  return null;
};

const initialState: Auth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.isAuth = true;
      localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
    },
    deleteAuth: (state) => {
      state.isAuth = false;
      localStorage.removeItem("isAuth");
    },
  },
});

const { reducer: authReducer, actions } = authSlice;
export const { setAuth, deleteAuth } = actions;
export default authReducer;
