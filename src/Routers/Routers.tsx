import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Contact from "../Pages/Contact/Contact";
import ChartsAndMaps from "../Pages/ChartsAndMaps/ChartsAndMaps";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Hello Error</p>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard/charts-maps",
        element: <ChartsAndMaps />,
      },
    ],
  },
]);

export default router;
