import React, { useState } from "react";
import { makeNewPost } from "../API-Adapt";

const NewPost = (props) => {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;
  const setShowNew = props.setShowNew;
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
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
      wait();
    } else {
      let tempMessage = "your item failed to post";
      if (!title) {
        tempMessage += " must include title";
      }
      if (!price) {
        tempMessage += " must include price";
      }
      if (!description) {
        tempMessage += " must include description";
      }
      setMessage(tempMessage);
    }
  }

  function wait() {
    setTimeout(() => {
      setShowNew(false);
    }, 1000);
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
            type="text"
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
        {message.length ? <h3>{message}</h3>: null}
      </form>
      <button
        onClick={() => {
          setShowNew(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default NewPost;
