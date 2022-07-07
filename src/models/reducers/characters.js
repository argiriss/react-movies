// THIS FUNCTION CREATES A REDUCER
import { createReducer } from '@reduxjs/toolkit';

import { setCharactersList, increaseCounter, setCharacter } from '../actions/characterActions';

const initialState = {
  characters: {},
  character: {},
  loading: false,
  counter: 0,
};

const charactersReducer = createReducer(initialState, {
  [setCharactersList.type]: (state, action) => ({
    ...state,
    characters: action.payload,
  }),
  [setCharacter.type]: (state, action) => ({
    ...state,
    character: action.payload,
  }),
  [increaseCounter.type]: (state, action) => ({
    ...state,
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
