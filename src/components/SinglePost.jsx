import React from "react";

const SinglePost = (props) => {
  const post = props.post;
  console.log(post)
  return (
    <div className="post">
            <div>user:{post.author.username}</div>
      <div>Item:{post.title}</div>
      <div>Description:{post.description}</div>
      <div>Price:{post.price}</div>
    <div>Delivery:{post.willDeliver}</div>
    <div>Location:{post.location}</div>
      <div>Created:{post.createdAt}</div>
    </div>
  );
};

export default SinglePost;
