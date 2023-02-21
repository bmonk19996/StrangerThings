import React from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { LogIn, Register } from "./";
import { getUsername } from "../API-Adapt";
const Navbar = (props) => {
  const showNew = props.showNew;
  const setShowNew = props.setShowNew;
  const token = props.token;
  const setToken = props.setToken;
  function logOut() {
    localStorage.removeItem("token");
    setToken("");
  }
  async function test(){
    const response = await getUsername(token)
    if(response.data){
      console.log(response.data.username)
    }

  }
  test()
  return (
    <div id="navbar">
      <h2>
        <Link to="/">home</Link>
        {token ? (
          <div>
            <button
              onClick={() => {
                logOut();
              }}
            >
              logout
            </button>
            <button onClick={()=>setShowNew(!showNew)}>showNew</button>
          </div>
        ) : (
          <div>
            <Link to="/login">LogIn</Link>
            <Link to="/register">register</Link>
          </div>
        )}
      </h2>
    </div>
  );
};

export default Navbar;
