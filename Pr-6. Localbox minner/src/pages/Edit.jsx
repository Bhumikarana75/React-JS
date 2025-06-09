import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: '', genre: '', releaseYear: '', rating: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const data = location?.state;
    if (data) {
      setForm({ title: data.title, genre: data.genre, releaseYear: data.releaseYear, rating: data.rating });
      setEditId(data.id);
    }
  }, [location?.state]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allMovies = JSON.parse(localStorage.getItem("movies")) || [];
    const updated = allMovies.map(m => m.id === editId ? { ...m, ...form } : m);
    localStorage.setItem("movies", JSON.stringify(updated));
    alert("Movie updated");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Movie</h2>
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
              <input type="radio" name="rating" value={num} checked={form.rating === num.toString()} onChange={handleChange} required /> {num}
            </label>
          ))}
        </div>
        <button className="btn btn-warning w-100">Update</button>
      </form>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-secondary">Back to List</Link>
      </div>
    </div>
  );
};

export default Edit;