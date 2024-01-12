import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { userReducer } from "./Reducer";

export const myStore = configureStore({
    reducer:{
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})