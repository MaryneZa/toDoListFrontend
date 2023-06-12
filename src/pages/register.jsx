import React, { useState } from 'react'
import axios from 'axios';
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const api = axios.create({
    baseURL: 'http://localhost:6951'
  });

  function BuildData(event){
    event.preventDefault();
    const data ={
      username: username,
      name : name,
      password: password
    }
    
    api.post('/register',data).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
    console.log(data)
  }

  


  return (
    <div>
      <span>Register</span>
      <form onSubmit={(event) => {event.preventDefault(); BuildData(event);}}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value = {name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          username:
          <input 
          type="text" 
          name="username"
          value = {username} 
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="on"
          />
        </label>
        <label>
          password:
          <input 
          type="password" 
          name="password"
          value = {password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete= "current-password"

          
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Register;