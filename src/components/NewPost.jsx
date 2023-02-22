import React, { useState } from "react";
import { makeNewPost } from "../API-Adapt";

const NewPost = (props) => {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;

  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [willDeliver, setWillDeliver] = useState(false);
  async function submitNewPost(event) {
    event.preventDefault();
    const response = await makeNewPost(
      token,
      title,
      description,
      price,
      location,
      willDeliver
    );
    if (response.success) {
      //if successful, update posts, and set success message
      console.log(response);
      const newPosts = [...posts];
      setMessage("your item is posted");
      newPosts.push(response.data.post);
      setPosts(newPosts);
    } else {
      //set failure message
      setMessage("your item failed to post");
    }
  }
  return (
    <div id="newPost">
      <h1>Add a Post to the Board</h1>
      <form
        onSubmit={(event) => {
          submitNewPost(event);
        }}
      >
        <div className="input">
          <label>Title:</label>
          <input
            type="text"
            onInput={(event) => setTitle(event.target.value)}
          ></input>
        </div>

        <div className="input">
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            onInput={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div className="input">
          <label>Location (Optional):</label>
          <input
            type="text"
            onInput={(event) => setLocation(event.target.value)}
          ></input>
        </div>
        <div className="input">
          <label>Delivery (Optional):</label>
          <input
            type="checkbox"
            value="Will Deliver"
            onChange={() => setWillDeliver(!willDeliver)}
          ></input>
        </div>
        <div className="input">
          <label>Description:</label>
          <textarea
            onInput={(event) => setDescription(event.target.value)}
            id="description"
          ></textarea>
        </div>
        <button>Add Post</button>
        <h3>{message}</h3>
      </form>
    </div>
  );
};

export default NewPost;
