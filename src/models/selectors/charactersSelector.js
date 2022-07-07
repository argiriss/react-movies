const characters = state => state.charactersReducer.characters;

const singleCharacter = state => state.charactersReducer.character;

const error = state => state.charactersReducer.error;
const counter = state => state.charactersReducer.counter;

export { characters, singleCharacter, error, counter };
