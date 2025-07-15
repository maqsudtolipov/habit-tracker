import {Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import Layout from "@/app/Layout.tsx";
import HabitPage from "@/pages/HabitPage.tsx";
import StatsPage from "@/pages/StatsPage.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/habit/:id" element={<HabitPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
