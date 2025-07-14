import React, { useState } from "react";

const AddMovie = () => {
  const [form, setForm] = useState({
    title: "",
    genre_ids: "",
    vote_average: "",
    poster_path: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!form.title || !form.genre_ids || !form.vote_average || !form.poster_path) {
      alert("Please fill in all fields.");
      return;
    }

    const newMovie = {
      title: form.title,
      genre_ids: form.genre_ids.split(",").map(Number),
      vote_average: parseFloat(form.vote_average),
      poster_path: form.poster_path
    };

    try {
      const res = await fetch("http://localhost:5000/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie)
      });

      if (res.ok) {
        alert("Movie added successfully!");
        setForm({ title: "", genre_ids: "", vote_average: "", poster_path: "" });
      } else {
        throw new Error("Failed to add movie");
      }
    } catch (err) {
      alert("Error adding movie. Check console.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-3 col-md-8">
      <h3 className="text-center mb-4 text-primary">🎬 Add Movie</h3>

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

      <div className="form-group mb-3">
        <label>Poster Path</label>
        <input type="text" name="poster_path" className="form-control" value={form.poster_path} onChange={handleChange} />
      </div>

      <button className="btn btn-success w-100" onClick={handleAdd}>Add Movie</button>
    </div>
  );
};

export default AddMovie;