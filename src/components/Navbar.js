import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  const { mode } = useTheme()
  return (
    <div className={`navbar ${mode}  bg-primary`}>
      <div className="navbar-start">
        <Dropdown />
      </div>

      <div className="navbar-center">
        <Link
          to="/"
          className={`btn ${mode} text-accent btn-ghost normal-case text-2xl`}
        >
          Monster Rolodex
        </Link>
      </div>

      <div className="navbar-end">
        <SearchBar />
        <ThemeSelector />
      </div>
     
    </div>
  );
}
