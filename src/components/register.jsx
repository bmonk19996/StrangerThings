import React, { useState } from 'react';
import { registerAPI } from '../API-Adapt';

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const token = props.token;
    const setToken = props.setToken;

    const submitRegister = async (event) => {
        event.preventDefault();
       const response =  await registerAPI(username, password);
       if(response.data){
        setToken(response.data.token);
       }

        
    }

    return(
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
       
    )
}

export default Register;