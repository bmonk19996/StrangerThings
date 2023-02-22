import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { logInPost } from "../API-Adapt";

const LogIn = () => {
  const navigate = useNavigate();
  const [token, setToken] = useOutletContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitLogin(event) {
    event.preventDefault();
    const response = await logInPost(username, password);
    if (response.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }
  }
  return (
    <div className="styleAccounts">
      <h2>Login to Existing Account</h2>
      <form onSubmit={(event) => submitLogin(event)} className='accountsForm'>
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
