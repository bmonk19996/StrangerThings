import React, {useState} from "react";
import {useParams, useLocation} from 'react-router-dom'

export default function Edit(){
const location = useLocation();

// const [message, setMessage] = useState("");
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [postLocation, setPostLocation] = useState(location.state.location);
  const [price, setPrice] = useState(location.state.price);
  const [willDeliver, setWillDeliver] = useState(location.state.willDeliver);

    const { id } = useParams();

    return (<div>

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
            defaultValue={title}
          ></input>
        </div>

        <div className="input">
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
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
        <button>submit edited post</button>
      </form>
    </div>
)
}