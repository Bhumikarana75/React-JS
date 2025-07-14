import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    genre_ids: "",
    vote_average: "",
    poster_path: ""
  });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://localhost:5000/movies/${id}`);
        if (!res.ok) throw new Error("Movie not found");
        const data = await res.json();
        setForm({
          title: data.title,
          genre_ids: data.genre_ids.join(", "),
          vote_average: data.vote_average,
          poster_path: data.poster_path
        });
      } catch (err) {
        alert("Error loading movie.");
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const updatedMovie = {
      title: form.title,
      genre_ids: form.genre_ids.split(",").map(Number),
      vote_average: parseFloat(form.vote_average),
      poster_path: form.poster_path
    };

    try {
      const res = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMovie)
      });

      if (!res.ok) throw new Error("Failed to update");

      alert("Movie updated successfully!");
      navigate("/view");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating movie.");
    }
  };

  return (
    <div className="container mt-4 col-md-8">
      <h3 className="text-center mb-4 text-warning">✏️ Edit Movie</h3>

      <div className="form-group mb-3">
        <label>Title</label>
        <input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} />
      </div>

      <div className="form-group mb-3">
        <label>Genre IDs (comma separated)</label>
        <input type="text" name="genre_ids" className="form-control" value={form.genre_ids} onChange={handleChange} />
      </div>

      <div className="form-group mb-3">
        <label>Rating</label>
        <input type="number" name="vote_average" className="form-control" value={form.vote_average} onChange={handleChange} />
      </div>

      <div className="form-group mb-4">
        <label>Poster Path</label>
        <input type="text" name="poster_path" className="form-control" value={form.poster_path} onChange={handleChange} />
      </div>

      <button className="btn btn-primary w-100" onClick={handleUpdate}>Update Movie</button>
    </div>
  );
};

export default EditMovie;