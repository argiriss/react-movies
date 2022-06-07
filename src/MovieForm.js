import React, { Fragment } from 'react';

const MovieForm = ({ movieName, year, handleMovieFormSubmit, handleChangeMovieName, handleChangeYear }) => {
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
