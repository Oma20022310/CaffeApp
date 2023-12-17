import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "../types/types";

type categoriesObjState = {
    entities: Categories[];
    lastFetch: number;
};

const storedCategoriesObjString = localStorage.getItem("categoriesObj");
const storedCategoriesObj = storedCategoriesObjString ? JSON.parse(storedCategoriesObjString) : [];

const initialState: categoriesObjState = {
    entities: storedCategoriesObj,
    lastFetch: Date.now(),
}

const categoriesObjSlice = createSlice({
    name: "categoriesObj",
    initialState,
    reducers: {
        categoriesObjReceved: (state, action: PayloadAction<Categories[] | unknown>) => {
            if (action.payload) {
                state.entities = Object.values(action.payload);
                state.lastFetch = Date.now();
                localStorage.setItem("categoriesObj", JSON.stringify(state.entities));
            }
        }
    }
});

const { reducer: categoriesObjReducer, actions } = categoriesObjSlice;
export const { categoriesObjReceved } = actions;
//dsfsdfsываыавыываваывфыв
export default categoriesObjReducer;

