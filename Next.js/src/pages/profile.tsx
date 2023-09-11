import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((error) => {
        setError("You are not authorized to view this page. Please login.");
      });
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p className="main-message"> {message}</p>
      {error && <p className="error-message"> {error}</p>}
    </div>
  );
}

export default Profile;