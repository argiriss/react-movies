import CharacterCard from 'components/CharacterCard';
import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [characters, setCharacters] = useState({});

  const fetchCharacters = async () => {
    const characters = await fetch(`${process.env.REACT_APP_RICKANDMORTY}/character`);
    const returnedCharacters = await characters.json();

    setCharacters(returnedCharacters);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return characters?.results?.map(character => <CharacterCard key={character.id} character={character} />);
};

export default App;
