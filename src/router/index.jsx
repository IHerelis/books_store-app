import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/pages/HomePage";

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
    ]
  }
]);