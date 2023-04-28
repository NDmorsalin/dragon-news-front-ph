import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Admin from "../pages/Admin/Admin";
import CategoryForm from "../pages/Admin/CategoryForm/CategoryForm";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import fetchNewsByCategory from "../utility/fetchNewsByCategory";
import fetchNewsById from "../utility/fetchNewsById";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="category/all" />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/category",
    element: <Layout />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: fetchNewsByCategory,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: fetchNewsById,
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
