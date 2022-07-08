import CharacterList from 'components/CharacterList';
import CharactersForm from 'components/CharactersForm';
import { fetchCharactersAction } from 'models/actions/characterActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import withToggle from './withToggle';

const Characters = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const fetchCharacters = async (name, status, gender, page = 1) => {
    setToggle(true);
    dispatch(fetchCharactersAction({ name, status, gender, page }));
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

      <CharacterList extraPayload={{ name, status, gender }} />
    </div>
  );
};

export default withToggle(Characters);
