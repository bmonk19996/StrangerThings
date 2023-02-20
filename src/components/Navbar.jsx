import React from "react";
import { Outlet } from "react-router-dom";
import { LogIn, Register } from "./";
const Navbar = (props) => {
  const token = props.token;
  const setToken = props.setToken;

  return (
    <div id="navbar">
      <h2>
        {" "}
        <LogIn setToken={setToken} token={token} />
        <Register setToken={setToken} token={token}/>
        <button onClick={() => {
            setToken('');
        }}>logout</button>
      </h2>
    </div>
  );
};

export default Navbar;
