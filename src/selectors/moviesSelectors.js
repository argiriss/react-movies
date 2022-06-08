const movies = state => state.rootReducer.moviesReducer.movies;

const errorMessage = state => state.rootReducer.moviesReducer.errorMessage;

const selectedMovie = state => state.rootReducer.moviesReducer.selectedMovie;

export { movies, errorMessage, selectedMovie };
