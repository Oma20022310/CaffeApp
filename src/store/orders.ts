import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Orders } from "../types/types";

type OrdersState = {
    entities: Orders[],
    count: number
};

const storedOrdersString = localStorage.getItem("orders");
const storedOrders = storedOrdersString ? JSON.parse(storedOrdersString) : [];

const initialState: OrdersState = {
    entities: storedOrders,
    count: storedOrders.length + 1,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        ordersReceved: (state, action: PayloadAction<Orders[]>) => {
            state.entities = action.payload;
            localStorage.setItem("orders", JSON.stringify(action.payload));
        },
        addOrders: (state, action: PayloadAction<Orders>) => {
            state.entities.push(action.payload);
            state.count += 1;
            localStorage.setItem("orders", JSON.stringify(state.entities));
        },
    }
});

const { reducer: ordersReducer, actions } = ordersSlice;
export const { ordersReceved, addOrders } = actions;

export default ordersReducer;

