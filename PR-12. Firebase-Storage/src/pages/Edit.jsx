import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, text: initialText } = state || {};

  const [text, setText] = useState("");

  useEffect(() => {
    if (!id) {
      alert("No task data found.");
      navigate("/");
      return;
    }
    setText(initialText || "");
  }, [id, initialText, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please fill out the task!");
      return;
    }
    try {
      const todoRef = doc(db, "todos", id);
      await updateDoc(todoRef, { text });
      alert("Todo updated!");
      navigate("/");
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 mb-3">
        <input
          className="form-control w-50"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Edit the task..."
        />
        <button className="btn btn-warning" type="submit">Update</button>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default Edit;
