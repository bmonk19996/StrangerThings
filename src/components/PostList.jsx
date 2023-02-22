import React from "react";
import { SinglePost } from "./";

const PostList = (props) => {
  const posts = props.posts;
  const token = props.token
  const setPosts = props.setPosts

  return (
    <div className="allPosts">
      {posts.length
        ? posts.map((post, idx) => {
            return (
              <SinglePost post={post} token={token} posts={posts} setPosts={setPosts} idx={idx} key={`the post is at the idex of ${idx}`}/>
            );
          })
        : null}
    </div>
  );
};

export default PostList;
