import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="nav-link" to="/" exact>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/movies" exact>
        Movies
      </NavLink>
      <NavLink className="nav-link" to="/actors" exact>
        Actors
      </NavLink>
      <NavLink className="nav-link" to="/directors" exact>
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
