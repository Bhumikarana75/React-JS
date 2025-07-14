import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn({ userList, setIsLoggedIn }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUser = userList.find(
      (user) => user.username === loginUsername && user.password === loginPassword
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      setIsLoggedIn(true);
      navigate("/view");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="mb-3 text-center text-primary">Sign In</h4>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={handleLogin}>
          Login
        </button>
        <p className="mt-3 text-center">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
