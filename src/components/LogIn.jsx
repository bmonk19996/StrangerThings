import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { logInPost } from "../API-Adapt";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitLogin(event) {
    event.preventDefault();
    const response = await logInPost(username, password);
    if (response.success) {
      localStorage.setItem('token',JSON.stringify(response.data.token))
    }
  }

  return (
    <div>
      <form onSubmit={(event) => submitLogin(event)}>
        <label>Username</label>
        <input
          type="text"
          onInput={(event) => setUsername(event.target.value)}
        />
        <label> Password</label>
        <input
          type="text"
          onInput={(event) => setPassword(event.target.value)}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
};

export default LogIn;