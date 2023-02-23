import React, { useState } from "react";
import { registerPost } from "../API-Adapt";
import { useOutletContext, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [token, setToken] = useOutletContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = async (event) => {
    event.preventDefault();
    const response = await registerPost(username, password);
    if (response.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }else{
      setMessage('Your account was not created');
    }
  };
  return (
    <div className="styleAccounts">
      <h2>Create New Account</h2>
      <form onSubmit={(event) => submitRegister(event)} className='accountsForm'>
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

export default Register;
