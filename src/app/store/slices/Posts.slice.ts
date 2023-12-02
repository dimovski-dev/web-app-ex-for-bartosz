// Import necessary functions from the @reduxjs/toolkit library.
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Import the Post and PostsState interfaces from the @shared/interfaces/Posts.interfaces module.
import { Post, PostsState } from "@shared/interfaces/Posts.interfaces";

// Define the initial state for the posts slice.
const initialState: PostsState = {
  posts: [],
};

// Create a Redux slice using createSlice from @reduxjs/toolkit.
export const PostsSlice = createSlice({
  // Name of the slice, used in the state structure.
  name: "PostsSlice",
  // Initial state for the slice.
  initialState,
  // Reducers define how the state can be mutated in response to actions.
  reducers: {
    // Action to set the posts in the state.
    setPosts(state, action: PayloadAction<Post[]>) {
      // Update the posts array in the state with the payload from the action.
      state.posts = action.payload;
    },
  },
});

// Extract the reducer from the created slice.
export const PostReducer = PostsSlice.reducer;
