import { configureStore } from "@reduxjs/toolkit";
import money from "./Money/moneySlice"

export const store = configureStore({
    reducer: {
        money,      
    }
})