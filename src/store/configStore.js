import { configureStore } from "@reduxjs/toolkit";
import { btFormReducer } from "./btForm/slice";

export const store = configureStore({
    reducer:{
        btFormReducer,
    }
})