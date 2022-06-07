import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  // ALL ASYNC LOGIC GOES TO A SEPARATE FUNCTION I N S I D E THE COMPONENT, AND THEN WE CALL THIS FUNCTION
  // INSIDE THE USEEFFECT HOOK
  const fetchMovies = async () => {
    const movies = await fetch(
      `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&y=2022&s=test`
    )
      .then(res => res.json())
      .then(data => data);

    setMovies(movies.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => {
          return <li key={movie.imdbID}>{movie.Title}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
