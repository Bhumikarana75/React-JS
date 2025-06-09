import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {
  const navigate = useNavigate();
  const allMovies = JSON.parse(localStorage.getItem("movies")) || [];

  const [movies, setMovies] = useState(allMovies);

  const deleteMovie = (id) => {
    const updated = movies.filter(m => m.id !== id);
    localStorage.setItem("movies", JSON.stringify(updated));
    setMovies(updated);
    alert("Movie deleted");
  };

  useEffect(() => {
    setMovies(allMovies);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Movie Library</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 ? (
            movies.map((m, i) => (
              <tr key={i}>
                <td>{m.title}</td>
                <td>{m.genre}</td>
                <td>{m.releaseYear}</td>
                <td>{m.rating}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => navigate('/edit', { state: m })}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteMovie(m.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center">No movies available</td></tr>
          )}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/add" className="btn btn-primary">Add Movie</Link>
      </div>
    </div>
  );
};

export default Table;