import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className={`navbar  bg-primary`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className={`btn  bg-base btn-ghost btn-circle`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base rounded-box w-52`}
          >
            <li>
              <Link to="/" className={`text  text-accent`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className={`text  text-accent`}>
                Create Monster
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link
          to="/"
          className={`btn  text-accent btn-ghost normal-case text-2xl`}
        >
          Monster Rolodex
        </Link>
      </div>

      <div className="navbar-end">
        <SearchBar />
      </div>
    </div>
  );
}
