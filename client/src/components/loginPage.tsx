import React, { useState } from "react";
import axios from 'axios';

const Login = (): JSX.Element => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState("");
  const [jwtToken,setToken] = useState("");

  const handleSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault();
    // Perform validation here
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    if (!email) {
      setError("Please enter your email/mobile");
      return;
    }
    // If all validations pass, perform login logic here
    axios.post('http://localhost:4000/login', {
      userName: name,
      password: password,
      email: email,
    })
    .then(function (response) {
      if(response.data?.token){
        setToken(response.data?.token);
        localStorage.setItem("jwtToken", response.data?.token);
        console.log('logged in successfully jwtToken-', jwtToken);
      }
      else{throw new Error('jwtToken not received on login')}
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log("Login successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-mobile">Email/Mobile:</label>
        <input
          type="text"
          id="email-mobile"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
