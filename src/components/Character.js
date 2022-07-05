import { setCharacter } from 'models/actions/characterActions';
import { character } from 'models/selectors/charactersSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Character = () => {
  const dispatch = useDispatch();

  const fetchCharacter = async id => {
    const initialCharacter = await fetch(`${process.env.REACT_APP_RICKANDMORTY}/character/${id}`);
    const returnedCharacter = await initialCharacter.json();

    dispatch(setCharacter(returnedCharacter));
  };

  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  return <div>{character.gender}</div>;
};

export default Character;
