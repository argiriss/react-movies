// THIS FUNCTION CREATES A REDUX ACTION
import { createAction } from '@reduxjs/toolkit';

// THE FOLLOWING ACTION ACTUALLY CREATES A FUNCTION THAT
// RETURNS AN OBJECT WITH TWO KEYS:
// type: 'counter/increaseCounter'
// payload: undefined up to now, but ready to accept any payload/argument
const setCharactersList = createAction('characters/setList');
const setCharacter = createAction('characters/setCharacter');
const setError = createAction('characters/setError');
const increaseCounter = createAction('characters/increaseCounter');
const increaseCounterSuccessful = createAction('characters/increaseCounterSuccessful');
const fetchCharactersAction = createAction('characters/fetchCharactersAction');
const setToggleCharacters = createAction('characters/loader');

export {
  setCharactersList,
  setCharacter,
  setError,
  increaseCounter,
  increaseCounterSuccessful,
  fetchCharactersAction,
  setToggleCharacters,
};
