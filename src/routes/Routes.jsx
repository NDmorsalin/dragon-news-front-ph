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
import ProfileLayout from "../Layout/ProfileLayout";
import About from "../pages/Home/About/About";
import MyProfile from "../pages/Profile/Me/MyProfile";

const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="category/all" />,
      },

      {
        path: "category/:id",
        element: <Category />,
        loader: fetchNewsByCategory,
      },
      {
        path: "about",
        element: <About />,
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
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "me",
        element: <MyProfile />,
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
