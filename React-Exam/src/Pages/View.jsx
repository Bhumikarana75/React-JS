// src/Pages/View.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie, fetchMovies } from "../redux/action/movieAction";

const ViewMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Movie List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Movie</Link>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100 shadow-sm">
              <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Genre: {movie.genre_ids}</p>
                <p className="card-text">Rating: {movie.vote_average}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/edit/${movie.id}`} className="btn btn-warning btn-sm">Edit</Link>
                  <button onClick={() => handleDelete(movie.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMovies;
