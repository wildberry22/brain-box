import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorThemeSlice";

export const store = configureStore({
  reducer: {
    colorTheme: colorReducer,
  },
});
