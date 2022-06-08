import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increaseCounterAction } from './actions/counterActions';
import MovieForm from './MovieForm';
import MovieInfoPopup from './MovieInfoPopup';
import { counter } from './selectors/counterSelectors';

import './App.css';

const App = () => {
  // INITIATE DISPATCH FUNCTION/HOOK
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [movieName, setMovieName] = useState('');
  const [year, setYear] = useState(0);
  const [errorMessage, setErrorMessage] = useState('No movies found!');

  // ALL ASYNC LOGIC GOES TO A SEPARATE FUNCTION I N S I D E THE COMPONENT, AND THEN WE CALL THIS FUNCTION
  // INSIDE THE USEEFFECT HOOK
  const fetchMovies = async (movieName, year) => {
    const movies = await fetch(
      `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&y=${year}&s=${movieName}`
    )
      .then(res => res.json())
      .then(data => data);

    setMovies(movies.Search ? movies.Search : []);
    if (movies.Response === 'False') {
      setErrorMessage(movies.Error);
    }
  };

  const handleChangeMovieName = event => {
    setMovieName(event.target.value);
  };

  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  const handleMovieFormSubmit = () => {
    fetchMovies(movieName, year);
  };

  useEffect(() => {}, []);

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
      <MovieForm
        year={year}
        movieName={movieName}
        fetchMovies={fetchMovies}
        handleMovieFormSubmit={handleMovieFormSubmit}
        handleChangeMovieName={handleChangeMovieName}
        handleChangeYear={handleChangeYear}
      />
      {movies.length > 0 ? (
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
      ) : (
        <div>{errorMessage}</div>
      )}
      <div>{useSelector(counter)}</div>
      <button onClick={() => dispatch(increaseCounterAction(2))}>Increase counter</button>
    </Fragment>
  );
};

export default App;
