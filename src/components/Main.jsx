import React, { useState, useEffect } from "react";
import { getPosts } from "../API-Adapt";
import { Navbar, PostList } from "./";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  async function retrievePosts() {
    const myPosts = await getPosts();
    setPosts(myPosts.data.posts);
  }
  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <div id="main">
      <Navbar setToken={setToken} token={token} />
      <PostList posts={posts} />
    </div>
  );
};

export default Main;
