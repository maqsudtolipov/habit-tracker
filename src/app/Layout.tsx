import {Outlet} from "react-router-dom";
import Nav from "@/app/components/Nav.tsx";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
