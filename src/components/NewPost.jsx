import React, { useState } from "react";
import { makeNewPost } from "../API-Adapt";

const NewPost = (props) => {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;

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
    console.log(token);
    if (response.success) {
      console.log(response);
      const newPosts = [...posts];

      newPosts.push(response.data.post);
      setPosts(newPosts);
    } else {
      //display failure message
    }
  }
  return (
    <div id="newPost">
        <h1>Make New Post</h1>
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
        <button> Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
