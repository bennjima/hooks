import React, { useState } from 'react';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    const title = prompt('Enter the movie title:');
    const genre = prompt('Enter the movie genre:');
    const newMovie = { title, genre };

    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <button onClick={handleAddMovie}>Add Movie</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>Title:</strong> {movie.title}, <strong>Genre:</strong> {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieApp;