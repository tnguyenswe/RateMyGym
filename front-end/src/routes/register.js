import React, { useState } from 'react';
import Axios from 'axios' ;

const Register = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    Axios.get('http://localhost:3001/register',{
        username: usernameReg,
        password: passwordReg,
    }).then((response) => {
        if (response ==='ok'){
            alert('success')
        }else{
            alert(response.error)
        }
      });

    return(
        <div className='App'>
        <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" 
        onChange={(e)=>{
          setUsernameReg(e.target.value);
        }}
        />
        <br></br>
        <label>Password </label>
        <input type="text"
        onChange={(e)=>{
          setPasswordReg(e.target.value);
        }}
         />
        <button onClick={Register}> Register </button>
      </div>
      </div>
      );
  };

  export default Register;