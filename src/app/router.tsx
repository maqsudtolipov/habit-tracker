import {createBrowserRouter} from "react-router-dom";
import Layout from "@/app/components/Layout.tsx";
import {lazy} from "react";
import ErrorPage from "@/pages/ErrorPage.tsx";
import HomePage from "@/pages/HomePage.tsx";

const HabitPage = lazy(() => import("@/pages/HabitPage.tsx"));
const StatsPage = lazy(() => import("@/pages/StatsPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/habit/:id",
        element: <HabitPage />,
      },
      {
        path: "/stats",
        element: <StatsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
