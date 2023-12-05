import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dishes } from '../types/types';

type DishesState = {
  entities: Dishes[];
  lastFetch: number;
};

const storedDishesString = localStorage.getItem("dishes");
const storedDishes = storedDishesString ? JSON.parse(storedDishesString) : [];

const initialState: DishesState = {
  entities: storedDishes,
  lastFetch: Date.now(),
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    dishesReceved: (state, action: PayloadAction<Dishes[] | any>) => {
      if (action.payload) {
        state.entities = action.payload;
        state.lastFetch = Date.now();
        localStorage.setItem("dishes", JSON.stringify(state.entities));
      }
    },
    dishesUpdate: (state, action: PayloadAction<Dishes>) => {
      state.entities.push(action.payload);
      localStorage.setItem("dishes", JSON.stringify(state.entities));
    },
    deleteDish: (state, action) => {
      state.entities = state.entities.filter((item) => item.id !== action.payload);
      localStorage.setItem("dishes", JSON.stringify(state.entities));
    },
    dishEditUpdate: (state, action: PayloadAction<Dishes>) => {
      state.entities[
        state.entities.findIndex((item) => item.id === action.payload.id)
      ] = action.payload;
      localStorage.setItem("dishes", JSON.stringify(state.entities));
    },
  },
});

const { reducer: dishesReducer, actions } = dishesSlice;
export const { dishesReceved, dishesUpdate, deleteDish, dishEditUpdate } = actions;

export default dishesReducer;
