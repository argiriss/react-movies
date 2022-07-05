import React from 'react';

import './characters.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url('${character.image}')` }} />
      <div className="card-content">
        <h1>{character.name}</h1>
        <span>
          {character.status} - {character.species}
        </span>
        <div>Last known location: {character.location.name}</div>
        <div>First seen in: {character.origin.name}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
