import React, { useState } from "react";
import { registerPost } from "../API-Adapt";
import { useOutletContext } from "react-router-dom";
const Register = () => {
  const [token, setToken] = useOutletContext()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = async (event) => {
    event.preventDefault();
    const response = await registerPost(username, password);
    if (response.success) {
      setToken(response.data.token)
      localStorage.setItem('token',JSON.stringify(response.data.token))
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(event) => submitRegister(event)}>
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

export default Register;
