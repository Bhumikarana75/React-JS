import { useState } from 'react';
import './App.css';
import { genres, movies } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter(movie => movie.genre_ids.includes(selectedGenre));

  return (
    <div className="container text-center mt-4">
      <h2 className="mb-4">🎬 Movie Genre Filter</h2>

      <div className="mb-4">
        <button className="btn btn-secondary me-2" onClick={() => setSelectedGenre('All')}>
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="btn btn-outline-primary me-2"
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <table className="table table-bordered table-striped w-75 mx-auto">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>
                {
                  movie.genre_ids
                    .map(id => genres.find(g => g.id === id)?.name)
                    .filter(Boolean)
                    .join(", ")
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
