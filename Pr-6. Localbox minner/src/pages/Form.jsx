import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', genre: '', releaseYear: '', rating: '' });

  const allMovies = JSON.parse(localStorage.getItem("movies")) || [];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { ...form, id: Date.now() };
    localStorage.setItem("movies", JSON.stringify([...allMovies, newMovie]));
    alert("Movie added");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Movie</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        <input className="form-control mb-3" name="title" placeholder="Title" onChange={handleChange} value={form.title} required />
        <select className="form-control mb-3" name="genre" onChange={handleChange} value={form.genre} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
        <input className="form-control mb-3" type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} value={form.releaseYear} required />
        <div className="mb-3">
          <label className="form-label">Rating:</label><br />
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num} className="form-check-inline me-2">
              <input type="radio" name="rating" value={num} onChange={handleChange} required /> {num}
            </label>
          ))}
        </div>
        <button className="btn btn-success w-100">Submit</button>
      </form>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-secondary">Back to List</Link>
      </div>
    </div>
  );
};

export default Form;