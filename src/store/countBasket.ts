import { createSlice } from "@reduxjs/toolkit";

type CountBasketState = {
    entities: number;
};

const storedCountBasketString = localStorage.getItem("countBasket");
const storedCountBasket = storedCountBasketString ? JSON.parse(storedCountBasketString) : 0;

const initialState: CountBasketState = {
    entities: storedCountBasket,
}

const countBasketSlice = createSlice({
    name: "countBasket",
    initialState,
    reducers: {
        AddCountBasket: (state, action) => {
            state.entities += action.payload;
            localStorage.setItem("countBasket", JSON.stringify(state.entities));
        },
        decrementCountBasket: (state, action) => {
            state.entities -= action.payload;
            localStorage.setItem("countBasket", JSON.stringify(state.entities));
        },
        clearCountBaske: (state) => {
            state.entities = 0;
            localStorage.removeItem("countBasket");
        }
    }
});

const { reducer: countBasketReducer, actions } = countBasketSlice;
export const { AddCountBasket, decrementCountBasket, clearCountBaske } = actions;

export default countBasketReducer;

