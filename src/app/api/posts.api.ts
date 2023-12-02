import { HttpMethods } from "@shared/enums/HttpMethods";
import { baseApi } from "./base.api";
import { AppEndpoints } from "@shared/enums/AppEndpoints";
import { PostsSlice } from "@app/store/slices/Posts.slice";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const { setPosts } = PostsSlice.actions;
export const postsApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: baseUrl + AppEndpoints.GET_ALL_POSTS,
        method: HttpMethods.GET,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setPosts(data));
        } catch (err) {
          if (err instanceof Error) {
            throw new Error(err.message);
          }
        }
      },
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
