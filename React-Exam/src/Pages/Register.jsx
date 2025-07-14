import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp({ setUserList }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (!newUsername || !newPassword || !newEmail) {
      alert("Please fill in all fields.");
      return;
    }

    const newUser = {
      username: newUsername,
      password: newPassword,
      email: newEmail,
      name: newUsername,
    };

    const storedUsers = JSON.parse(localStorage.getItem("userList")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("userList", JSON.stringify(storedUsers));
    setUserList(storedUsers);
    alert("Account created! You can now login.");
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="mb-3 text-center text-success">Register</h4>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleCreateAccount}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;