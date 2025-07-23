import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import Layout from "@/app/components/Layout.tsx";
import HabitPage from "@/pages/HabitPage.tsx";
import StatsPage from "@/pages/StatsPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";

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
