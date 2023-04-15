import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});
