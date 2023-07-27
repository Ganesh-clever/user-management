import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";


export const Store = configureStore({
    reducer:{
        UserReducer:UserReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck:false
    })
});

export type RootState = ReturnType <typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;