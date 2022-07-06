import { setCharacter } from 'models/actions/characterActions';
import { singleCharacter } from 'models/selectors/charactersSelector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import withToggle from './withToggle';

const Character = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const character = useSelector(singleCharacter);

  const fetchCharacter = async id => {
    setToggle(true);
    const initialCharacter = await fetch(`${process.env.REACT_APP_RICKANDMORTY}/character/${id}`);
    const returnedCharacter = await initialCharacter.json();

    dispatch(setCharacter(returnedCharacter));
    setToggle(false);
  };

  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  return !toggle ? <div>{character.name}</div> : 'LOADING....';
};

export default withToggle(Character);
