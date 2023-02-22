import React, { useState } from "react";
import { deletePost, sendMessageAPI } from "../API-Adapt";
const SinglePost = (props) => {
  const post = props.post;
  const token = props.token;
  const posts = props.posts
  const idx = props.idx
  const setPosts = props.setPosts
  const [sentMessage, setSentMessage] = useState('');

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
 async function sendMessage(){
    //send a message:

    const response = await sendMessageAPI(token, post._id, sentMessage);
    console.log(response);

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
      ) : 
      // <button onClick={() => sendMessage()}>Message User</button>
      <form id='sendMessageForm' onSubmit={
        (event)=> {
          event.preventDefault();
          sendMessage();
        }
      }>
        <label>Send Message to Seller:</label>
        <textarea rows='5' cols='30' onInput={(event) => setSentMessage(event.target.value)}></textarea>
        <button>Send</button>
      </form>
      }
    </div>
  );
};

export default SinglePost;
