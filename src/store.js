import { configureStore } from '@reduxjs/toolkit';
import { fetchCharactersEpic } from 'models/epics/characterEpics';
import { increaseCounterEpic } from 'models/epics/epics';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import charactersReducer from './models/reducers/characters';

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: { charactersReducer },
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleWare.run(combineEpics(increaseCounterEpic, fetchCharactersEpic));

export default store;
