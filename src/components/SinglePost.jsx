import React from "react";
import { deletePost } from "../API-Adapt";
const SinglePost = (props) => {
  const post = props.post;
  const token = props.token;
  const posts = props.posts
  const idx = props.idx
  const setPosts = props.setPosts

  async function deleteMyPost() {
    const response = await deletePost(token, post._id);
    if (response.success) {
      const newPosts = [...posts];
      newPosts.splice(idx,1)
      setPosts(newPosts);
    }
  }
  function editPost() {
    //edit the post
  }

  return (
    <div className="post">
      <div>
        <span className="cardLabel">User</span>: {post.author.username}
      </div>
      <div>
        <span className="cardLabel">Item</span>: {post.title}
      </div>
      <div>
        <span className="cardLabel">Description</span>: {post.description}
      </div>
      <div>
        <span className="cardLabel">Price</span>: {post.price}
      </div>
      {post.willDeliver ? (
        <div>
          <span className="cardLabel">Delivery</span>: yes
        </div>
      ) : (
        <div>
          <span className="cardLabel">Delivery</span>: no
        </div>
      )}
      <div>
        <span className="cardLabel">Location</span>: {post.location}
      </div>
      <div>
        <span className="cardLabel">Created</span>: {post.createdAt}
      </div>
      {post.isAuthor ? (
        <div>
          <button onClick={() => deleteMyPost()}>delete</button>
          <button onClick={() => editPost()}>edit</button>
        </div>
      ) : null}
    </div>
  );
};

export default SinglePost;
