const movies = state => state.rootReducer.moviesReducer.movies;

const errorMessage = state => state.rootReducer.moviesReducer.errorMessage;

export { movies, errorMessage };
