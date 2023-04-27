import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import CategoryForm from "../pages/Admin/CategoryForm/CategoryForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "add-category",
        element: <CategoryForm />,
      },
    ],
  },
]);

export default routes;
