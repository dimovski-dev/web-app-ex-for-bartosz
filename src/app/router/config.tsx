// Import the Route interface from the Router.interfaces module.
import { Route } from '@shared/interfaces/Router.interfaces';

// Import the PostsPage and TodosPage components from their respective modules.
import { PostsPage } from '@pages/PostsPage';
import { TodosPage } from '@pages/TodosPage';

// Define a function that returns an array of route configurations.
export const allRoutes = () => {
  // Define an array to store public route configurations.
  const publicRoutes: Route[] = [
    {
      // Path for the Posts page.
      path: '/posts',
      // React component to render for the Posts page.
      element: PostsPage(),
      // Flag indicating an exact path match is required.
      exact: true,
      // Title associated with the route.
      title: 'Product',
    },
    {
      // Path for the Todos page.
      path: '/todos',
      // React component to render for the Todos page.
      element: TodosPage(),
      // Flag indicating an exact path match is required.
      exact: true,
      // Title associated with the route.
      title: 'Products',
    },
  ];

  // Return the array of public route configurations.
  return [...publicRoutes];
};

