import { setCharacter } from 'models/actions/characterActions';
import { singleCharacter } from 'models/selectors/charactersSelector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Character = () => {
  const dispatch = useDispatch();
  const character = useSelector(singleCharacter);

  const fetchCharacter = async id => {
    const initialCharacter = await fetch(`${process.env.REACT_APP_RICKANDMORTY}/character/${id}`);
    const returnedCharacter = await initialCharacter.json();

    dispatch(setCharacter(returnedCharacter));
  };

  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  return <div>{character.name}</div>;
};

export default Character;
