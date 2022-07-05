const characters = ({ charactersReducer }) => {
  return charactersReducer.characters;
};

const character = ({ charactersReducer }) => {
  return charactersReducer.character;
};

export { characters, character };
