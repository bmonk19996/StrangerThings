import React, { useState, useEffect } from "react";
import { NewPost, PostList } from "./";
import { useOutletContext } from "react-router-dom";
import { getPosts } from "../API-Adapt";
export default function MainPage() {
  const [token,, showNew,] = useOutletContext();
  const [posts, setPosts] = useState([]);

  async function retrievePosts() {
    const myPosts = await getPosts(token);
    setPosts(myPosts.data.posts);
  }
  useEffect(() => {
    retrievePosts(token);
  }, [token]);
  return (
    <div className="mainPage">
      <PostList posts={posts} setPosts={setPosts} token={token} />
      {token && showNew ? (
        <NewPost token={token} setPosts={setPosts} posts={posts} />
      ) : null}
    </div>
  );
}

