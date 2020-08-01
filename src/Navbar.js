import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const token = localStorage.getItem("token");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#fbe6d4" }}
    >
      <a className="navbar-brand" href="#">
        <b>Real Estate</b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        {!token ? (
          <div className="form-inline my-2 my-lg-0">
            <Link to="/login">
              <span className="btn btn-warning mr-2">Login</span>
            </Link>
            <Link to="/register">
              <span className="btn btn-dark my-2 my-sm-0">Register</span>
            </Link>
          </div>
        ) : (
          <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <span className="btn btn-danger my-2 my-sm-0" type="submit">
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
