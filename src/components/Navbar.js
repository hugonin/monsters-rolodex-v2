import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className={`navbar  bg-primary-focus`}>
      <div className="navbar-start">
        <Dropdown />
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
