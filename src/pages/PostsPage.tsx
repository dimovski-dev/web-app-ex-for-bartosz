// Import necessary components and hooks from various modules.
import { useGetAllPostsQuery } from "@app/api/posts.api";
import { Flex, Spinner } from "@chakra-ui/react";
import { PostItem } from "@components/PostItem";
import { useTypedSelector } from "@shared/hooks/useTypedSelector";
import { Post } from "@shared/interfaces/Posts.interfaces";

// Define the PostsPage component.
export const PostsPage = () => {
  // Use the useGetAllPostsQuery hook to fetch posts data from the API.
  const { isLoading } = useGetAllPostsQuery('');

  // Use the useTypedSelector hook to select the 'posts' state from the Redux store.
  const { posts } = useTypedSelector((state) => state.postReducer);

  // Render the component conditionally based on the loading state.
  return (
    isLoading ? (
      // Display a spinner while loading.
      <Spinner />
    ) : (
      // Display the posts in a Flex container when not loading.
      <Flex justifyContent={'center'} gap={'10px'} flexWrap={'wrap'}>
        {posts.map((post: Post) => (
          // Map through the posts and render a PostItem component for each post.
          <PostItem key={post.id} post={post} />
        ))}
      </Flex>
    )
  );
};
