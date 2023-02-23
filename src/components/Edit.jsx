import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { editPostPatch } from "../API-Adapt";
import { useOutletContext, useNavigate } from "react-router-dom";


export default function Edit(props) {
  const location = useLocation();
  const [token] = useOutletContext();
  // const [message, setMessage] = useState("");
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [postLocation, setPostLocation] = useState(location.state.location);
  const [price, setPrice] = useState(location.state.price);
  const [willDeliver, setWillDeliver] = useState(location.state.willDeliver);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();


  async function submitEditPost(event) {
    event.preventDefault();
    console.log(title);
    console.log(description);
    const response = await editPostPatch( 
      title,
      description,
      price,
      postLocation,
      willDeliver,
      token, id
    );
     if (response.success) {
      setMessage("your item is edited");
      setTimeout(()=>{navigate("/");},1000)

     } else {
      setMessage('failed to edit')
     }

  }

  return (
    <div>
      <div className="editPage">
      <form
        className="edit"
        onSubmit={(event) => {
          submitEditPost(event);
        }}
      >
        <div className="input">
          <label>Title:</label>
          <input
            type="text"
            onInput={(event) => setTitle(event.target.value)}
            defaultValue={title}
          ></input>
        </div>

        <div className="input">
          <label>Price:</label>
          <input
            type="text"
            defaultValue={price}
            onInput={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div className="input">
          <label>Location (Optional):</label>
          <input
            type="text"
            defaultValue={postLocation}
            onInput={(event) => setPostLocation(event.target.value)}
          ></input>
        </div>
        <div className="input">
          <label>Delivery (Optional):</label>
          <input
            type="checkbox"
            checked={willDeliver}
            onChange={() => setWillDeliver(!willDeliver)}
          ></input>
        </div>
        <div className="input">
          <label>Description:</label>
          <textarea
            onInput={(event) => setDescription(event.target.value)}
            defaultValue={description}
            id="description"
          ></textarea>
        </div>
        <button className="editButton">Submit Edited Post</button>
      </form>
      {message.length ?  <h3>{message}</h3>: null} 
    </div>
    </div>
  );
}
