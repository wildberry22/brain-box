import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorThemeSlice";
import { topicsApiSlice } from "./api/topicsApiSlice";
import { quizApiSlice } from "./api/quizApiSlice";
export const store = configureStore({
  reducer: {
    colorTheme: colorReducer,
    [topicsApiSlice.reducerPath]: topicsApiSlice.reducer,
    [quizApiSlice.reducerPath]: quizApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(topicsApiSlice.middleware)
      .concat(quizApiSlice.middleware),
  devTools: !import.meta.env.PROD,
});