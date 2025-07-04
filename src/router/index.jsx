import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/pages/HomePage";
import AdminPage from "../components/pages/AdminPage";
import CreateBook from "../components/adminTools/CreateBook";

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/adminPage',
        element: <AdminPage />,
        children: [
          {
            path: '/adminPage/createBook',
            element: <CreateBook />,
          }
        ]
      },
    ]
  }
]);