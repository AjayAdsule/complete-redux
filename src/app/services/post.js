import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/posts",
    }),

    addPost: builder.mutation({
      query: (rest) => ({
        url: "/posts",
        method: "POST",
        body: rest,
      }),
    }),

    updatePost: builder.mutation({
      query: (id, rest) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetPostQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useAddPostMutation,
} = postApi;
