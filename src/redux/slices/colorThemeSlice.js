import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "Teal",
};

export const colorThemeSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setActiveTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setActiveTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
