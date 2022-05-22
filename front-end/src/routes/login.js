import React, { useState } from 'react';
import Axios from 'axios' ;
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.get('http://localhost:3001/login',{
      username: username,
      password: password,
    }).then((response) => {
      if (response.status === 'ok') {
        <Link to="/"></Link>
      } else {
        alert(response.error)
      }
    });

    return(
        <div className="App">
        <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder = "Username..." 
        onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
        <input type="password" placeholder = "Password..." 
        onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <button onClick={Login}> Login </button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
    );
  };

  export default Login;