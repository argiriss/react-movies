const characters = state => state.charactersReducer.characters;

const singleCharacter = state => state.charactersReducer.character;

const error = state => state.charactersReducer.error;
const charactersLoading = state => state.charactersReducer.loading;
const counter = state => state.charactersReducer.counter;

export { characters, singleCharacter, error, counter, charactersLoading };
