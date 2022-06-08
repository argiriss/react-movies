// THIS FUNCTION CREATES A REDUCER
import { createReducer } from '@reduxjs/toolkit';

import { addMoviesList, addMoviesErrorMessage, returnMovieInfo } from '../actions/moviesActions';

const initialState = {
  movies: [],
  errorMessage: 'No movies found!',
  selectedMovie: {},
};

const moviesReducer = createReducer(initialState, {
  [addMoviesList.type]: (state, action) => ({
    ...state,
    movies: action.payload,
  }),
  [addMoviesErrorMessage.type]: (state, action) => ({
    ...state,
    errorMessage: action.payload,
  }),
  [returnMovieInfo.type]: (state, action) => ({
    ...state,
    selectedMovie: action.payload,
  }),
});

export default moviesReducer;
