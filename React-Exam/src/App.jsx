import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Register";
import SignIn from "./Pages/Login";
import Navbar from "./component/Navbar";
import ViewMovies from "./Pages/View";
import AddMovie from "./Pages/Add";
import EditMovie from "./Pages/Edit";

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<SignIn userList={userList} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignUp setUserList={setUserList} />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/view" element={<ViewMovies />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
