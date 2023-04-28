import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Admin from "../pages/Admin/Admin";
import CategoryForm from "../pages/Admin/CategoryForm/CategoryForm";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import fetchNewsByCategory from "../utility/fetchNewsByCategory";
import fetchNewsById from "../utility/fetchNewsById";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:id",
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
