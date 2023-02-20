import React from "react";
import { Outlet } from "react-router-dom";
import { LogIn } from "./";
const Navbar = (props) => {
  const token = props.token;
  const setToken = props.setToken;

  return (
    <div id="navbar">
      <h2>
        {" "}
        <LogIn setToken={setToken} token={token} />
      </h2>
    </div>
  );
};

export default Navbar;
