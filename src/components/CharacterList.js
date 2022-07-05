import { characters } from 'models/selectors/charactersSelector';
import React from 'react';
import { useSelector } from 'react-redux';

import CharacterCard from './CharacterCard';
import './characterList.css';

const CharacterList = () => {
  const returnedCharacters = useSelector(characters);

  return (
    <div className="characterList">
      {returnedCharacters?.results?.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
