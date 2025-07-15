import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>Navigation</nav>
      <main><Outlet /></main>
    </div>
  );
};

export default Layout;