import { increaseCounterSuccessful } from 'models/actions/characterActions';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

const increaseCounterEpic = action$ =>
  action$.pipe(
    ofType('characters/increaseCounter'),
    map(({ payload }) => {
      // const results = [{ id: 1, name: 'vaios' }];
      const newCounter = payload + 10;

      return increaseCounterSuccessful(newCounter);
    })
  );

export { increaseCounterEpic };
