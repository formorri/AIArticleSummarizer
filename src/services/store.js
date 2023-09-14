import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// global state to store info in application
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})