import React from 'react';

const MovieInfoPopup = ({ movie, closePopup }) => {
  return (
    <div>
      <div>Popup</div>
      <button onClick={closePopup}>X</button>
      <div>{movie.Plot}</div>
    </div>
  );
};

export default MovieInfoPopup;
