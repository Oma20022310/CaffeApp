import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Basket } from "../types/types";

type BasketState = {
  entities: Basket[];
};

const storedBasketString = localStorage.getItem("basket");
const storedBasket = storedBasketString ? JSON.parse(storedBasketString) : [];

const initialState: BasketState = {
  entities: storedBasket,
};

const hotBasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketReceved: (state, action: PayloadAction<Basket[]>) => {
      state.entities = action.payload;
      localStorage.setItem("basket", JSON.stringify(action.payload));
    },
    addItemsBasket: (state, action: PayloadAction<Basket>) => {
      state.entities.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.entities));
    },
    basketUpdate: (state, action: PayloadAction<Basket>) => {
      state.entities[
        state.entities.findIndex((u) => u.id === action.payload.id)
      ] = action.payload;
      localStorage.setItem("basket", JSON.stringify(state.entities));
    },
    deleteItemsBasket: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(state.entities));
    },
    allDeleteItemsBasket: (state) => {
      state.entities = [];
      localStorage.removeItem("basket");
    },
  },
});

const { reducer: basketReducer, actions } = hotBasketSlice;
export const {
  basketReceved,
  addItemsBasket,
  basketUpdate,
  deleteItemsBasket,
  allDeleteItemsBasket,
} = actions;

export default basketReducer;
