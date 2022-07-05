import React from 'react';

import './charactersForm.css';

const CharactersForm = ({ fetchCharacters, name, setName, status, setStatus, gender, setGender }) => {
  return (
    <div className="charactersForm">
      <input
        type="text"
        value={name}
        placeholder="Enter character's name"
        name="name"
        onChange={e => setName(e.target.value)}
      />

      <div className="inputRadioButton">
        <div>
          <input
            type="radio"
            id="alive"
            name="status"
            value="alive"
            checked={status === 'alive'}
            onChange={() => setStatus('alive')}
          />
          <label htmlFor="">Alive</label>
        </div>

        <div>
          <input
            type="radio"
            id="dead"
            name="status"
            value="dead"
            checked={status === 'dead'}
            onChange={() => setStatus('dead')}
          />
          <label htmlFor="">Dead</label>
        </div>

        <div>
          <input
            type="radio"
            id="unknown"
            name="status"
            value="unknown"
            checked={status === 'unknown'}
            onChange={() => setStatus('unknown')}
          />
          <label htmlFor="">Unknown</label>
        </div>
      </div>

      <div>
        <label htmlFor="gender">Select gender: </label>

        <select name="gender" id="gender" onChange={e => setGender(e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <button className="submitButton" type="button" onClick={() => fetchCharacters(name, status, gender)}>
        Search
      </button>
    </div>
  );
};

export default CharactersForm;
