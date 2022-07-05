import { characters } from 'models/selectors/charactersSelector';
import React from 'react';
import { useSelector } from 'react-redux';

import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const returnedCharacters = useSelector(characters);

  return returnedCharacters?.results?.map(character => <CharacterCard key={character.id} character={character} />);
};

export default CharacterList;
