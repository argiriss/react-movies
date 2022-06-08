import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increaseCounterAction } from './actions/counterActions';
import MovieForm from './MovieForm';
// import MovieInfoPopup from './MovieInfoPopup';
import MoviesList from './MoviesList';
import { counter } from './selectors/counterSelectors';

import './App.css';

const App = () => {
  // INITIATE DISPATCH FUNCTION/HOOK
  const dispatch = useDispatch();
  // const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {}, []);

  // const fetchMovie = async imdbID => {
  //   const movie = await fetch(
  //     `${process.env.REACT_APP_OMDB_ROUTE_PATH}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbID}`
  //   )
  //     .then(res => res.json())
  //     .then(data => data);

  //   setSelectedMovie(movie);
  // };

  // const closePopup = () => {
  //   setSelectedMovie({});
  // };

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
