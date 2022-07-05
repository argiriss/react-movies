import { characters } from 'models/selectors/charactersSelector';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import './characterList.css';

const CharacterList = () => {
  const returnedCharacters = useSelector(characters);

  return (
    <Fragment>
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
  );
};

export default CharacterList;
