import CharacterList from 'components/CharacterList';
import CharactersForm from 'components/CharactersForm';
import { fetchCharactersAction, setToggleCharacters } from 'models/actions/characterActions';
import { charactersLoading } from 'models/selectors/charactersSelector';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Characters = () => {
  const dispatch = useDispatch();
  const loadingSelector = useSelector(charactersLoading);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const fetchCharacters = (name, status, gender, page = 1) => {
    dispatch(setToggleCharacters());
    dispatch(fetchCharactersAction({ name, status, gender, page }));
  };

  return (
    <div>
      {loadingSelector && 'LOADING....'}
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

export default Characters;
