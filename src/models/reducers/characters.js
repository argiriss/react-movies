// THIS FUNCTION CREATES A REDUCER
import { createReducer } from '@reduxjs/toolkit';

import { setCharactersList } from '../actions/characterActions';

const initialState = {
  characters: {},
};

const charactersReducer = createReducer(initialState, {
  [setCharactersList.type]: (state, action) => ({
    ...state,
    characters: action.payload,
  }),
  // [addMoviesErrorMessage.type]: (state, action) => ({
  //   ...state,
  //   errorMessage: action.payload,
  // }),
  // [returnMovieInfo.type]: (state, action) => ({
  //   ...state,
  //   selectedMovie: action.payload,
  // }),
});

export default charactersReducer;
