import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleRegister() {
    try {
      await axios.post("http://127.0.0.1:8000/register/", {
        username,
        password,
      });

      // Redirect to login page after successful registration
      history.push("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  }

  return (
    <div className="login-container">
      <div className="register">
        <img
          src={process.env.PUBLIC_URL + "/icons8-todo-list-100.png"}
          alt="Logo"
          className="app-logo"
        />

        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Register;
