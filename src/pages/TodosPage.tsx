// Import necessary components and hooks from various modules.
import { useGetAllTodosQuery } from "@app/api/todos.api";
import { Flex, Spinner } from "@chakra-ui/react";
import { TodoItem } from "@components/TodoItem";
import { Todo } from "@shared/interfaces/Todos.interface";

// Define the TodosPage component.
export const TodosPage = () => {
  // Use the useGetAllTodosQuery hook to fetch todos data from the API.
  const { data, isLoading } = useGetAllTodosQuery('');

  // Render the component conditionally based on the loading state.
  return (
    isLoading ? (
      // Display a spinner while loading.
      <Spinner />
    ) : (
      // Display the todos in a Flex container when not loading.
      <Flex justifyContent={'center'} gap={'10px'} flexWrap={'wrap'}>
        {data.map((todo: Todo) => (
          // Map through the todos and render a TodoItem component for each todo.
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Flex>
    )
  );
};
