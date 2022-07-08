// THIS FUNCTION CREATES A REDUCER
import { createReducer } from '@reduxjs/toolkit';

import {
  setCharactersList,
  setCharacter,
  increaseCounterSuccessful,
  setError,
  setToggleCharacters,
} from '../actions/characterActions';

const initialState = {
  characters: {},
  character: {},
  loading: false,
  counter: 0,
  error: '',
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
  [setError.type]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [setToggleCharacters.type]: state => ({
    ...state,
    loading: !state.loading,
  }),
  [increaseCounterSuccessful.type]: (state, action) => ({
    ...state,
    counter: action.payload,
  }),
});

export default charactersReducer;
