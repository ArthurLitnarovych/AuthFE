import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import tourReducer from "./slices/tourSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        tour: tourReducer,
    },
});