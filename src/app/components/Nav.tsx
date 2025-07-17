import {Link, NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" border-b">
      <div className="max-w-[1024px] mx-auto p-4 flex items-center justify-between ">
        <Link
          className="flex items-center gap-2 font-medium select-none"
          to="/"
        >
          <img
            className="size-8"
            src="/logo.svg"
            alt="Check mark inside rounded box"
          />
          <span>Habits</span>
        </Link>

        <ul className="flex items-center justify-between gap-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "p-2 rounded bg-gray-200" : "p-2 rounded"
              }
              to="/"
            >
              🏠 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "p-2 rounded bg-gray-200" : "p-2 rounded"
              }
              to="/stats"
            >
              📊 Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
