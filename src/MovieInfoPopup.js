import React, { Fragment } from 'react';

const MovieInfoPopup = ({ movie, test, fetchMovie, imdbID }) => {
  return (
    <Fragment>
      <button onClick={() => test(movie)}>More Info</button>
      <button onClick={() => fetchMovie(imdbID)}>Plot</button>
    </Fragment>
  );
};

export default MovieInfoPopup;
