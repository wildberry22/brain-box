import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorThemeSlice";
import quizReducer from './slices/quizSlice'
import { topicsApiSlice } from "./api/topicsApiSlice";
export const store = configureStore({
  reducer: {
    colorTheme: colorReducer,
    quizData: quizReducer,
    [topicsApiSlice.reducerPath]: topicsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topicsApiSlice.middleware),
  devTools: import.meta.env.NODE_ENV !== "production",
});
