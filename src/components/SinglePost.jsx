import React from "react";

const SinglePost = (props) => {
  const post = props.post;
  return <p>{post.title}</p>;
};

export default SinglePost;
