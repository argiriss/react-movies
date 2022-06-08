const counter = state => {
  return state.rootReducer.counterReducer.counter;
};

export { counter };
