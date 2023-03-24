import React, { useState } from "react";
import axios from "axios";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(['']);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // perform validation
    let errors = [];
    if (!name) {
      errors.push("Name is required.");
    }
    if (!password) {
      errors.push("Password is required.");
    }
    if (!email) {
      errors.push("Email is required.");
    }
    setErrors(errors);

    // submit form if there are no errors
    if (errors.length === 0) {
      axios.post('http://localhost:4000/users', {
        userName: name,
        password: password,
        email: email,
      })
      .then(function (response) {
        console.log('response',response);
        console.log("Registration successful.");

      })
      .catch(function (error) {
        console.log('error',error);
      });
      // console.log("Login successful");
      // console.log("Registration successful.");
      // TODO: perform registration logic
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default RegistrationPage;
