import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topicItem: {
    id: 0,
    category: "",
    title: "Any Category",
    image:
      "https://images.pexels.com/photos/347735/pexels-photo-347735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  difficulty: "Mixed",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData: (state, action) => {
      state.topicItem = action.payload.topicItem;
      state.difficulty = action.payload.difficulty;
    },
  },
});

export const { setQuizData } = quizSlice.actions;

export default quizSlice.reducer;
