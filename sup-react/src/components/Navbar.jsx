import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <ul className="nav-links">
        <h1>Sup!</h1>
        <Link to="/home" className="links">
          Home
        </Link>
        <Link to="/register" className="links">
          Register
        </Link>
        <Link to="/login" className="links">
          Login
        </Link>
      </ul>
    </nav>
  );
}
export default NavBar;
