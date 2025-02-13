import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
// import Home from "@/pages/Home";
// import Publish from "@/pages/Publish";
// import Article from "@/pages/Article";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("@/pages/Home"))
const Publish = lazy(() => import("@/pages/Publish"))
const Article = lazy(() => import("@/pages/Article"))

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
        element: (
          <Suspense fallback>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "article",
        element: (
          <Suspense fallback>
            <Article></Article>
          </Suspense>
        ),
      },
      {
        path: "publish",
        element: (
          <Suspense fallback>
            <Publish></Publish>
          </Suspense>
        ),
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
