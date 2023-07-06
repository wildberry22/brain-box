import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://opentdb.com/api.php";
// ?amount=10&category=10&difficulty=medium&type=multiple

export const quizApiSlice = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (args) => {
        const { category, difficulty } = args || {
          category: "",
          difficulty: "mixed",
        };
        return {
          url: `?amount=10${category !== "" ? `&category=${category}` : ""}${
            difficulty !== "mixed" ? `&difficulty=${difficulty}` : ""
          }&type=multiple`,
        };
      },
      providesTags: ["Quiz"],
    }),
    
  }),
});

export const { useGetQuestionsQuery } = quizApiSlice;
