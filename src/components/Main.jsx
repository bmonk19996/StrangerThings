import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPosts } from "../API-Adapt";
import { Navbar, PostList, NewPost } from "./";

const Main = () => {
  const [showNew, setShowNew] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div id="main">
      <Navbar
        token={token}
        setToken={setToken}
        setShowNew={setShowNew}
        showNew={showNew}
      />
      <Outlet context={[token, setToken, showNew, setShowNew]} />
    </div>
  );
};

export default Main;
