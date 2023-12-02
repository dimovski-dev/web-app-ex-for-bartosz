// Import the useRoutes hook from the react-router-dom library.
import { useRoutes } from 'react-router-dom';

// Import the allRoutes function from the config module.
import { allRoutes } from './config';

// Define a React component called AppRouter.
export const AppRouter = () => {
  // Get an array of route configurations using the allRoutes function.
  const appRoutes = allRoutes();

  // Use the useRoutes hook to render the appropriate component based on the current route.
  // This hook is part of the react-router-dom library.
  return useRoutes(appRoutes);
};

