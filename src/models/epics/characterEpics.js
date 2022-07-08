import {
  fetchCharactersAction,
  setCharactersList,
  setError,
  setToggleCharacters,
} from 'models/actions/characterActions';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { concatMap, mergeMap } from 'rxjs/operators';

const fetchCharactersEpic = action$ =>
  action$.pipe(
    ofType(fetchCharactersAction.type),
    mergeMap(({ payload: { name, status, gender, page } }) => {
      const url = `${process.env.REACT_APP_RICKANDMORTY}/character?page=${page}&name=${name}&status=${status}&gender=${gender}`;
      const returnedCharacters = from(fetch(url).then(data => data.json()));

      return returnedCharacters.pipe(
        concatMap(payload => {
          if (payload?.error === '' || !payload?.error) {
            return [setCharactersList(payload), setError(''), setToggleCharacters()];
          }

          return [setError(payload?.error), setToggleCharacters()];
        })
      );
    })
  );

export { fetchCharactersEpic };
