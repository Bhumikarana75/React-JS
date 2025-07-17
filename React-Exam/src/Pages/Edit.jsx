// src/Pages/Edit.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMovie } from "../redux/action/movieAction";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    genre_ids: "",
    vote_average: "",
    poster_path: "",
  });

  // Fetch the movie data using fetch
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://localhost:5000/movies/${id}`);
        const data = await res.json();
        setForm(data);
      } catch (error) {
        console.error("Fetch movie error:", error);
      }
    };
    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateMovie(id, form, navigate));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Movie</h2>
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="btn btn-primary">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
