// THIS FUNCTION CREATES A REDUX ACTION
import { createAction } from '@reduxjs/toolkit';

// THE FOLLOWING ACTION ACTUALLY CREATES A FUNCTION THAT
// RETURNS AN OBJECT WITH TWO KEYS:
// type: 'counter/increaseCounter'
// payload: undefined up to now, but ready to accept any payload/argument
const addMoviesList = createAction('movies/addMoviesList');
const addMoviesErrorMessage = createAction('movies/addMoviesErrorMessage');
const returnMovieInfo = createAction('movies/returnMovieInfo');

export { addMoviesList, addMoviesErrorMessage, returnMovieInfo };
