import React, { useState, useEffect } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { LogIn, Register } from "./";
import { getUsername } from "../API-Adapt";
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
    const response = await getUsername(token);
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
    // <div id="navbar">
    //   <h2>
    //     <Link to="/">home</Link>
    //     {token ? (
    //       <div>
    //         <button
    //           onClick={() => {
    //             logOut();
    //           }}
    //         >
    //           logout
    //         </button>
    //         <button onClick={() => setShowNew(!showNew)}>showNew</button>
    //         <div>Hello, {username}!</div>
    //       </div>
    //     ) : (
    //       <div>
    //         <Link to="/login">LogIn</Link>
    //         <Link to="/register">register</Link>
    //       </div>
    //     )}
    //   </h2>
    // </div>
  <div id='navbar'>
    {/* <Link to="/">home</Link> */}
    {token ? 
    <div id='loggedIn'>
      <Link to="/" className="nav-items">home</Link>
      <h4 className="nav-items greeting">{`hi, ${username}!`}</h4>
      <button className="nav-items" onClick={() => {logOut();}}> Logout </button>
      <button className="nav-items" onClick={() => {setShowNew(!showNew)}}>Add a Post</button>
    </div>
    : 
    <div>
      <Link to="/">home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Make an Account</Link>
    </div>
    }
    <h1>Stranger's Things</h1>
  </div>
  );
};

export default Navbar;
