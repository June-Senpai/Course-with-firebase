import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/FilterSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    user: userSlice,
  },
});
