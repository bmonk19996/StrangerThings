import React from "react";

const SinglePost = (props) => {
  const post = props.post;
  return (
    <div className="post">
      <div><span className="cardLabel">User</span>: {post.author.username}</div>
      <div><span className="cardLabel">Item</span>: {post.title}</div>
      <div><span className="cardLabel">Description</span>: {post.description}</div>
      <div><span className="cardLabel">Price</span>: {post.price}</div>
      {
        post.willDeliver?
        <div><span className="cardLabel">Delivery</span>: yes</div>:<div><span className="cardLabel">Delivery</span>: no</div>
      }
      <div><span className="cardLabel">Location</span>: {post.location}</div>
      <div><span className="cardLabel">Created</span>: {post.createdAt}</div>
      {
        post.isAuthor?
        <div>is author</div>:<div>not author</div>
      }
    </div>
  );
};

export default SinglePost;
