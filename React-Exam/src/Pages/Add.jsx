// src/Pages/Add.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../redux/action/movieAction";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    genre_ids: "",
    vote_average: "",
    poster_path: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addMovie(form, navigate));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Movie</h2>
      <form onSubmit={handleAdd}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input type="text" name="genre_ids" className="form-control" value={form.genre_ids} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Vote Average</label>
          <input type="number" name="vote_average" className="form-control" value={form.vote_average} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Poster URL</label>
          <input type="text" name="poster_path" className="form-control" value={form.poster_path} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
