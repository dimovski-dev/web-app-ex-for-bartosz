export interface Route {
  title: string;
  element: React.ReactNode;
  exact?: boolean;
  path: string;
}
