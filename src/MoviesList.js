import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { returnMovieInfo } from './actions/moviesActions';
import MovieInfoPopup from './MovieInfoPopup';
import { movies, errorMessage, selectedMovie } from './selectors/moviesSelectors';

const MoviesList = () => {
  const dispatch = useDispatch();
  const fetchedMovies = useSelector(movies);
  const error = useSelector(errorMessage);
  const clickedMovie = useSelector(selectedMovie);

  const fetchMovie = async imdbID => {
    const movie = await fetch(
      `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbID}`
    )
      .then(res => res.json())
      .then(data => data);

    dispatch(returnMovieInfo(movie));
  };

  const closePopup = () => {
    dispatch(returnMovieInfo({}));
  };

  return fetchedMovies.length > 0 ? (
    <ul>
      {fetchedMovies.map(movie => {
        return (
          <Fragment key={movie.imdbID}>
            <li>
              {movie.Title}
              <button onClick={() => fetchMovie(movie.imdbID)}>Plot</button>
              {Object.keys(clickedMovie).length > 0 && movie.imdbID === clickedMovie.imdbID && (
                <MovieInfoPopup movie={clickedMovie} closePopup={closePopup} />
              )}
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
