// THIS FUNCTION CREATES A REDUCER
import { createReducer } from '@reduxjs/toolkit';

import { setCharactersList } from '../actions/characterActions';
import { setCharacter } from '../actions/characterActions';
import { setError } from '../actions/characterActions';

const initialState = {
  characters: {},
  character: {},
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
});

export default charactersReducer;
