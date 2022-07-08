import { fetchCharactersAction, setCharactersList, setError } from 'models/actions/characterActions';
import { ofType } from 'redux-observable';
// import { fromPromise } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const fetchCharactersEpic = action$ =>
  action$.pipe(
    ofType(fetchCharactersAction.type),
    concatMap(async ({ payload: { name, status, gender, page } }) => {
      const url = `${process.env.REACT_APP_RICKANDMORTY}/character?page=${page}&name=${name}&status=${status}&gender=${gender}`;
      const characters = await fetch(url);
      const returnedCharacters = await characters.json();

      // LETS SAY THAT BUSINESS REQUIRED
      // AN EXTRA FIELD ON THE RESULTS e.g. isVaios: true
      // THIS MANIPULATION GOES ALWAYS TO AN EPIC AND NOT DIRECTLY TO THE REDUCER
      const newReturnedCharacters = {
        ...returnedCharacters,
        results: returnedCharacters?.results?.map(result => ({ ...result, isVaios: true })),
      };

      // equals to dispatch(setCharactersList(returnedCharacters)) from component
      if (returnedCharacters?.error === '' || !returnedCharacters?.error) {
        // debugger;

        return setCharactersList(newReturnedCharacters);
      }

      return setError(returnedCharacters?.error);
    })
  );

export { fetchCharactersEpic };
