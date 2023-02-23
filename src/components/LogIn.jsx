import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { logInPost } from "../API-Adapt";

const LogIn = () => {
  const navigate = useNavigate();
  const [token, setToken] = useOutletContext();
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitLogin(event) {
    event.preventDefault();
    const response = await logInPost(username, password);
    if (response.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }else{
      setMessage('We were not able to login to your account');
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
      {message.length? <h3>{message}</h3>: null}
    </div>
  );
};

export default LogIn;
