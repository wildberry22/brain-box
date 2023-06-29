import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://649c4e95048075719237ec9b.mockapi.io";

export const topicsApiSlice = createApi({
  reducerPath: "topicsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
 /*  refetchOnMountOrArgChange: true, */
  endpoints: (builder) => ({
    getTopics: builder.query({
      query: (args) => {
        const { page, limit } = args || {};
        return {
          url: `/data?page=${page}&limit=${limit}`,
        };
      },
      providesTags: ['topics']
    }),
    getAllTopics: builder.query({
      query: () => {
        return {
          url: `/data`,
        };
      }
    }),
  }),
});

export const { useGetTopicsQuery, useGetAllTopicsQuery } = topicsApiSlice;
