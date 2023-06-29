import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorThemeSlice";
import { topicsApiSlice } from "./api/topicsApiSlice";
export const store = configureStore({
  reducer: {
    colorTheme: colorReducer,
    [topicsApiSlice.reducerPath]: topicsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topicsApiSlice.middleware),
  devTools: import.meta.env.NODE_ENV !== "production",
});
