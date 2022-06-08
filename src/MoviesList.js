import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { movies, errorMessage } from './selectors/moviesSelectors';

const MoviesList = () => {
  const fetchedMovies = useSelector(movies);
  const error = useSelector(errorMessage);

  return fetchedMovies.length > 0 ? (
    <ul>
      {fetchedMovies.map(movie => {
        return (
          <Fragment key={movie.imdbID}>
            <li>
              {movie.Title}
              {/* <button onClick={() => fetchMovie(movie.imdbID)}>Plot</button>
              {Object.keys(selectedMovie).length > 0 && movie.imdbID === selectedMovie.imdbID && (
                <MovieInfoPopup movie={selectedMovie} closePopup={closePopup} />
              )} */}
            </li>
          </Fragment>
        );
      })}
    </ul>
  ) : (
    <div>{error}</div>
  );
};

export default MoviesList;
