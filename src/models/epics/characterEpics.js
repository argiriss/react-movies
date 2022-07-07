import { fetchCharactersAction, setCharactersList, setError } from 'models/actions/characterActions';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

const fetchCharactersEpic = action$ =>
  action$.pipe(
    ofType(fetchCharactersAction.type),
    mergeMap(async ({ payload: { name, status, gender } }) => {
      const url = `${process.env.REACT_APP_RICKANDMORTY}/character?name=${name}&status=${status}&gender=${gender}`;
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
        return [setCharactersList(newReturnedCharacters), setError('')];
      }

      return setError(returnedCharacters?.error);
    })
  );

export { fetchCharactersEpic };
