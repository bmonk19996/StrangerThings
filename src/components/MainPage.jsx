import React, { useState, useEffect } from "react";
import { NewPost, PostList } from "./";
import { useOutletContext } from "react-router-dom";
import { getPosts } from "../API-Adapt";
export default function MainPage() {
  const [token, setToken, showNew, setShowNew] = useOutletContext();
  const [posts, setPosts] = useState([]);

  async function retrievePosts() {
    const myPosts = await getPosts();
    setPosts(myPosts.data.posts);
  }

  useEffect(() => {
    retrievePosts(token);
  }, [token]);
  return (
    <div className="mainPage">
      <PostList posts={posts} />
      {token && showNew ? (
        <NewPost token={token} setPosts={setPosts} posts={posts} />
      ) : null}
    </div>
  );
}

//<button onClick={setShowNew}>showNew</button>
