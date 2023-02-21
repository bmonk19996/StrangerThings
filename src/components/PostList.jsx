import React, { useState, useEffect } from "react";
import { SinglePost } from "./";
import { getPosts } from "../API-Adapt";

const PostList = (props) => {
  async function retrievePosts() {
  
    const myPosts = await getPosts();
    setPosts(myPosts.data.posts);
  }

  useEffect(() => {
    retrievePosts();
  }, []);
  const [posts, setPosts] = useState([]);
  return (
    <div>
      {posts.length ? (
        posts.map((post, idx) => {
          return (
            <SinglePost post={post} key={`the post is at the idex of ${idx}`} />
          );
        })
      ) : null}
    </div>
  );
};

export default PostList;
