import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './models/reducers/characters';

const store = configureStore({
  reducer: { charactersReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
