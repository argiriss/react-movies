import React, { useState, useEffect, Fragment } from 'react';

import MovieInfoPopup from './MovieInfoPopup';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

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

  const fetchMovie = async imdbID => {
    const movie = await fetch(
      `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbID}`
    )
      .then(res => res.json())
      .then(data => data);

    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie({});
  };

  return (
    <Fragment>
      <ul>
        {movies.map(movie => {
          return (
            <Fragment key={movie.imdbID}>
              <li>
                {movie.Title}
                <button onClick={() => fetchMovie(movie.imdbID)}>Plot</button>
                {Object.keys(selectedMovie).length > 0 && movie.imdbID === selectedMovie.imdbID && (
                  <MovieInfoPopup movie={selectedMovie} closePopup={closePopup} />
                )}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default App;
