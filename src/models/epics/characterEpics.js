import {
  fetchCharactersAction,
  setCharactersList,
  setError,
  setToggleCharacters,
} from 'models/actions/characterActions';
import { counter } from 'models/selectors/charactersSelector';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { concatMap, mergeMap } from 'rxjs/operators';

const fetchCharactersEpic = (action$, state$) =>
  action$.pipe(
    ofType(fetchCharactersAction.type),
    // WHEN AN EPIC WISHES TO HANDLE ASYNC FETCH AND THEN RETURN ACTION(S)
    // THEN WE DEFINITELY NEED 2 RX OPERATORS (ONE FOR THE FETCH AND ONE FOR DISPATCHING THE ACTION(S))
    mergeMap(({ payload: { name, status, gender, page } }) => {
      // THIS IS THE WAY TO GET A STATE VALUE
      // AT THE MOMENT(!!!!!) USING THE SELECTOR
      // WHICH IS ACTUALLY A FUNCTION THAT TAKES
      // THE STATE (state$.value) AS AN ARGUMENT
      console.log(counter(state$.value));

      const url = `${process.env.REACT_APP_RICKANDMORTY}/character?page=${page}&name=${name}&status=${status}&gender=${gender}`;
      const returnedCharacters = from(fetch(url).then(data => data.json()));

      return returnedCharacters;
    }),
    concatMap(payload => {
      if (payload?.error === '' || !payload?.error) {
        return [setCharactersList(payload), setError(''), setToggleCharacters()];
      }

      return [setError(payload?.error), setToggleCharacters()];
    })
  );

export { fetchCharactersEpic };
