import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import Layout from "@/app/components/Layout.tsx";
import {lazy} from "react";

const HabitPage = lazy(() => import("@/pages/HabitPage.tsx"));
const StatsPage = lazy(() => import("@/pages/StatsPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage.tsx"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/habit/:id" element={<HabitPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
