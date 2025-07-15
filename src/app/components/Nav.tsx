import {Link, NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 flex items-center justify-between border-b">
      <Link className="font-medium" to="/">
        ☘️ Habits
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
    </nav>
  );
};

export default Nav;
