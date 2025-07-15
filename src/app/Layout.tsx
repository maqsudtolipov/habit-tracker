import {Outlet} from "react-router-dom";
import Nav from "@/app/components/Nav.tsx";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main className="max-w-[1024px] mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
