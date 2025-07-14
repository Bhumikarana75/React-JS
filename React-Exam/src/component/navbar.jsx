import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand text-warning" to="/">🎬 MovieFlex</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {isAuthenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">View</Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav">
          {isAuthenticated ? (
            <>
              <span className="navbar-text text-light me-2">Hi, <strong>{user?.name || "User"}</strong></span>
              <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-warning btn-sm me-2" to="/">Login</Link>
              <Link className="btn btn-outline-info btn-sm" to="/signup">Register</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
