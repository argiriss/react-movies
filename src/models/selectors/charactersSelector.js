const characters = state => state.charactersReducer.characters;

const singleCharacter = state => state.charactersReducer.character;

const error = state => state.charactersReducer.error;

export { characters, singleCharacter, error };
