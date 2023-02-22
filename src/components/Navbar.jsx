import React, { useState, useEffect } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { LogIn, Register } from "./";
import { getUser } from "../API-Adapt";
const Navbar = (props) => {
  const showNew = props.showNew;
  const setShowNew = props.setShowNew;
  const token = props.token;
  const setToken = props.setToken;
  const [username, setUsername] = useState("");

  function logOut() {
    localStorage.removeItem("token");
    setToken("");
  }
  async function usernameSet() {
    const response = await getUser(token);
    if (response.data) {
      setUsername(response.data.username);
    } else {
      setUsername("");
    }
  }
  useEffect(() => {
    usernameSet();
  }, [token]);

  return (
    <div id="navbar">
      {token ? (
        <div id="loggedIn">
          <Link to="/" className="nav-items">
            home
          </Link>
          <Link to="/messages" className="nav-items">
            messages
          </Link>
          <h2 className="nav-items greeting">{`hi, ${username}!`}</h2>
          <button
            className="nav-items"
            onClick={() => {
              logOut();
            }}
          >
            {" "}
            Logout{" "}
          </button>
          <button
            className="nav-items"
            onClick={() => {
              setShowNew(!showNew);
            }}
          >
            New Post
          </button>
        </div>
      ) : (
        <div>
          <Link to="/">home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Make an Account</Link>
        </div>
      )}
      <h1>Stranger's Things</h1>
    </div>
  );
};

export default Navbar;
