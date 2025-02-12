import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import Article from "@/pages/Article";
const router = createBrowserRouter([
  {
    name: "layout",
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "article",
        element: <Article></Article>,
      },
      {
        path: "publish",
        element: <Publish></Publish>,
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
