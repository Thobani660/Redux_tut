import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../app/expenceSlice"

export const store = configureStore({
    reducer: {
        expense: expenseReducer,
    },
});
