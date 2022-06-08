// THIS FUNCTION CREATES A REDUCER
import { createReducer } from '@reduxjs/toolkit';

import { increaseCounterAction } from '../actions/counterActions';

const initialState = {
  counter: 0,
};

const counterReducer = createReducer(initialState, {
  [increaseCounterAction.type]: (state, action) => ({
    ...state,
    counter: state.counter + action.payload,
  }),
});

export default counterReducer;
