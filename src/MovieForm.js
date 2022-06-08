import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addMoviesList, addMoviesErrorMessage } from './actions/moviesActions';

const MovieForm = () => {
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState('');
  const [year, setYear] = useState(0);

  const handleChangeMovieName = event => {
    setMovieName(event.target.value);
  };

  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  const handleMovieFormSubmit = () => {
    fetchMovies(movieName, year);
  };

  // ALL ASYNC LOGIC GOES TO A SEPARATE FUNCTION I N S I D E THE COMPONENT, AND THEN WE CALL THIS FUNCTION
  // INSIDE THE USEEFFECT HOOK
  const fetchMovies = async (movieName, year) => {
    const movies = await fetch(
      `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&y=${year}&s=${movieName}`
    )
      .then(res => res.json())
      .then(data => data);

    dispatch(addMoviesList(movies.Search ? movies.Search : []));
    if (movies.Response === 'False') {
      dispatch(addMoviesErrorMessage(movies.Error));
    }
  };

  return (
    <Fragment>
      <input
        type="text"
        name="movieName"
        value={movieName}
        placeholder="Type a movie name"
        onChange={handleChangeMovieName}
      ></input>
      <input type="number" name="year" value={year} placeholder="Type a year" onChange={handleChangeYear}></input>
      <button type="submit" onClick={handleMovieFormSubmit}>
        Search Movies
      </button>
    </Fragment>
  );
};

export default MovieForm;
