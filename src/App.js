import CharacterList from 'components/CharacterList';
import CharactersForm from 'components/CharactersForm';
import { setCharactersList } from 'models/actions/characterActions';
import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const fetchCharacters = async (name, status, gender) => {
    const characters = await fetch(
      `${process.env.REACT_APP_RICKANDMORTY}/character?name=${name}&status=${status}&gender=${gender}`
    );
    const returnedCharacters = await characters.json();

    dispatch(setCharactersList(returnedCharacters));
  };

  useEffect(() => {
    fetchCharacters('', '', '');
  }, []);

  return (
    <Fragment>
      <CharactersForm
        setName={setName}
        fetchCharacters={fetchCharacters}
        name={name}
        status={status}
        setStatus={setStatus}
        gender={gender}
        setGender={setGender}
      />

      <CharacterList />
    </Fragment>
  );
};

export default App;
