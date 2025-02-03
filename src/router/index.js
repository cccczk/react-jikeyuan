import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    name: "layout",
    path: "/",
    element: <Layout></Layout>,
  },
  {
    name: "login",
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
