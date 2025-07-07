import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter a task!");
      return;
    }
    try {
      await addDoc(collection(db, "todos"), { text });
      alert("Task added!");
      setText("");
      navigate("/");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 mb-3">
        <input
          className="form-control w-50"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a Todo..."
        />
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
      <Link to="/" className="btn btn-secondary">View Todos</Link>
    </div>
  );
};

export default Add;
