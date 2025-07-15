import {Link, NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 flex items-center justify-between border-b">
      <Link className="font-medium" to="/">
        ☘️ Habits
      </Link>

      <ul className="flex items-center justify-between gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-1 rounded bg-purple-200" : "p-1 rounded"
            }
            to="/"
          >
            🏠 Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-1 rounded bg-purple-200" : "p-1 rounded"
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
