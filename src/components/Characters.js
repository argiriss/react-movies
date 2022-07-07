import CharacterList from 'components/CharacterList';
import CharactersForm from 'components/CharactersForm';
// import { setCharactersList } from 'models/actions/characterActions';
import { fetchCharactersAction } from 'models/actions/characterActions';
// import { setError } from 'models/actions/characterActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import withToggle from './withToggle';

const Characters = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const fetchCharacters = async (name, status, gender) => {
    setToggle(true);
    dispatch(fetchCharactersAction({ name, status, gender }));
    setToggle(false);
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
