import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const res = await fetch("http://localhost:5000/movies");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this movie?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        alert("Movie deleted!");
        fetchMovies();
      } else {
        throw new Error("Delete failed");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting movie.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center text-info mb-4">🎞️ All Movies</h3>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genres</th>
            <th>Rating</th>
            <th>Poster</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.title}</td>
              <td>{m.genre_ids.join(", ")}</td>
              <td>{m.vote_average}</td>
              <td>
                <img src={m.poster_path} alt={m.title} style={{ width: "60px" }} />
              </td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(m.id)}>
                  ✏️ Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(m.id)}>
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMovies;