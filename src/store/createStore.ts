import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import countBasketReducer from "./countBasket";
import dishesReducer from "./dishes";
import categoriesObjReducer from "./categoriesObj";
import ordersReducer from "./orders";
import {authSliceReducer} from "./authSlice";


const rootReducer = combineReducers({
    basket: basketReducer,
    countBasket: countBasketReducer,
    orders: ordersReducer,
    dishes: dishesReducer,
    categoriesObj: categoriesObjReducer,
    auth: authSliceReducer,
});

const store = configureStore({
    reducer: rootReducer
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;