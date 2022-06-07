import React, { useState, useEffect, Fragment } from 'react';

import MovieInfoPopup from './MovieInfoPopup';

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

  const test = movie => {
    console.log(movie.Title);
  };

  const fetchMovie = async imdbID => {
    const movie = await fetch(
      `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbID}`
    )
      .then(res => res.json())
      .then(data => data);

    console.log(movie.Plot);
  };

  return (
    <Fragment>
      <ul>
        {movies.map(movie => {
          return (
            <Fragment>
              <li key={movie.imdbID}>{movie.Title}</li>
              <MovieInfoPopup
                test={() => test(movie)}
                imdbID={movie.imdbID}
                fetchMovie={() => fetchMovie(movie.imdbID)}
              ></MovieInfoPopup>
            </Fragment>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default App;
