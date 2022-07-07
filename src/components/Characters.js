import CharacterList from 'components/CharacterList';
import CharactersForm from 'components/CharactersForm';
import { setCharactersList } from 'models/actions/characterActions';
import { setError } from 'models/actions/characterActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import withToggle from './withToggle';

const Characters = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const fetchCharacters = async (name, status, gender) => {
    // setToggle(true);
    const characters = await fetch(
      `${process.env.REACT_APP_RICKANDMORTY}/character?name=${name}&status=${status}&gender=${gender}`
    );
    const returnedCharacters = await characters.json();

    if (returnedCharacters.error === '' || !returnedCharacters.error) {
      dispatch(setCharactersList(returnedCharacters));
      dispatch(setError(''));
    } else {
      dispatch(setError(returnedCharacters.error));
    }
    // setToggle(false);
  };

  return (
    <div>
      {toggle && 'LOADING....'}
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
    </div>
  );
};

export default withToggle(Characters);
