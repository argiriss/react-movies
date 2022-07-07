import { configureStore } from '@reduxjs/toolkit';
// import rootEpics from 'models/epics/rootEpics';
import { createEpicMiddleware } from 'redux-observable';

import charactersReducer from './models/reducers/characters';

const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: { charactersReducer },
  middleware: [epicMiddleWare],
  devTools: process.env.NODE_ENV !== 'production',
});

// epicMiddleWare.run(rootEpics);

export default store;
