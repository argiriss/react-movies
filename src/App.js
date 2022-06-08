import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increaseCounterAction } from './actions/counterActions';
import MovieForm from './MovieForm';
import MoviesList from './MoviesList';
import { counter } from './selectors/counterSelectors';

import './App.css';

const App = () => {
  // INITIATE DISPATCH FUNCTION/HOOK
  const dispatch = useDispatch();

  return (
    <Fragment>
      <MovieForm />
      <MoviesList />

      <div>{useSelector(counter)}</div>
      <button onClick={() => dispatch(increaseCounterAction(2))}>Increase counter</button>
    </Fragment>
  );
};

export default App;
