import React from 'react';

import './characters.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url('${character.image}')` }} />
      <div className="card-content">content</div>
    </div>
  );
};

export default CharacterCard;
