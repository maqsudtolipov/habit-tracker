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
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/habit/:id",
        element: <HabitPage />,
        errorElement: <ErrorPage message='Failed to load habit details.' />,
      },
      {
        path: "/stats",
        element: <StatsPage />,
        errorElement: <ErrorPage message='Unable to fetch statistics' />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
