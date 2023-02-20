import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPosts } from "../API-Adapt";
import { Navbar, PostList } from "./";

const Main = () => {
  const [posts, setPosts] = useState([]);
 // const [token, setToken] = useState("");
  async function retrievePosts() {
    const myPosts = await getPosts();
    setPosts(myPosts.data.posts);
  }
  useEffect(() => {
    retrievePosts();
    //setToken(localStorage.getItem('token'))
  }, []);

  return (
    <div id="main">
      <PostList posts={posts} />
    </div>
  );
};

export default Main;
