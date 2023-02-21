import React from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { LogIn, Register } from "./";
const Navbar = (props) => {
const setToken =props.setToken
  function logOut() {
    localStorage.removeItem("token")
    setToken('')
  }

  return (
    <div id="navbar">
      <h2>
        <Link to="/">home</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/register">register</Link>
        <button
          onClick={() => {
            logOut();
          }}
        >
          logout
        </button>
      </h2>
    </div>
  );
};

export default Navbar;
