import React from 'react';

const MovieInfoPopup = ({ movie }) => {
  return (
    <div>
      <div>Popup</div>
      <div>{movie.Plot}</div>
    </div>
  );
};

export default MovieInfoPopup;
