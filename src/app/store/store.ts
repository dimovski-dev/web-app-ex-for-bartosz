// Import necessary functions and types from the @reduxjs/toolkit library.
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

// Import the postReducer from the Posts slice and postsApi from the posts.api module.
import { PostReducer as postReducer } from "@app/store/slices/Posts.slice";
import { postsApi } from "@app/api/posts.api";

// Combine reducers for the root reducer.
const rootReducer = combineReducers({
  // Use an alias for the postReducer from the Posts slice.
  postReducer,
  // Add the postsApi reducer under its specified reducerPath.
  [postsApi.reducerPath]: postsApi.reducer,
});

// Function to set up and configure the Redux store.
export const setupStore = (): ToolkitStore => {
  // Configure the Redux store using configureStore.
  return configureStore({
    // Combine and provide the root reducer to the store.
    reducer: rootReducer,
    // Middleware setup: Concatenate the default middleware with the postsApi middleware.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(postsApi.middleware);
    },
  });
};

// Define types for the RootState, AppStore, and AppDispatch.
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
