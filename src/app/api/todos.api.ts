import { HttpMethods } from "@shared/enums/HttpMethods";
import { baseApi } from "./base.api";
import { AppEndpoints } from "@shared/enums/AppEndpoints";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const todosApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: baseUrl + AppEndpoints.GET_ALL_TODOS,
        method: HttpMethods.GET,
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          return data;
        } catch (err) {
          if (err instanceof Error) {
            throw new Error(err.message);
          }
        }
      },
    }),
  }),
});

export const { useGetAllTodosQuery } = todosApi;
