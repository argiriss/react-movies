import { increaseCounter } from 'models/actions/characterActions';
import { characters, error, counter } from 'models/selectors/charactersSelector';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import './characterList.css';

const CharacterList = () => {
  const returnedCharacters = useSelector(characters);
  const errorMessage = useSelector(error);
  const counterSelector = useSelector(counter);

  console.log(returnedCharacters?.results);

  return errorMessage === '' ? (
    <Fragment>
      {/* {counterSelector}
      <button type="button" onClick={increaseCounter}>
        Increase counter
      </button> */}
      <Pagination
        totalResults={returnedCharacters?.info?.count}
        pages={[...Array(returnedCharacters?.info?.pages).keys()] || []}
      />

      <div className="characterList">
        {returnedCharacters?.results?.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </Fragment>
  ) : (
    <span>{errorMessage}</span>
  );
};

export default CharacterList;
