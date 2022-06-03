import React, { useState, useEffect } from 'react';

const HelloFunctionalComponents = ({ name, surname }) => {
  // INSTEAD OF USING THE FOLLOWING CLASS BASED CODE
  //   state = {
  //     counter: 1,
  //   };

  //   setCounter = () => {
  //     this.setState({ counter: this.state.counter + 1 });
  //   };
  // HERE counterState is the state name and setCounterState is the method that is used to change the state
  // The first parameter of useState is always the initial state
  // setCounterState function REPLACES this.setState({blah blah})

  const [countersState, setCountersState] = useState({ counter: 1, secondCounter: 1 });
  const { counter, secondCounter } = countersState; // we destructure our state and we can write counter instead of counterState.counter in our code

  const logicCounter = step => {
    setCountersState({ ...countersState, counter: counter + step });
  };

  // INSTEAD OF USING COMPONENTDIDMOUNT AND COMPONENTDIDUPDATE WE USE THE FOLLOWING
  // USEEFFECT TAKES A CALLBACK FUNCTION AS A PARAMETER
  useEffect(() => {
    setCountersState(state => ({ ...state, counter: counter + 1 })); // asynchronous change : correct always inside useEffect
    // setCountersState({ ...countersState, counter: counter + 1 }); // synchronous state change : NEVER inside useEffect
    // IF WE WANT OUR USEEFFECT TO BEHAVE LIKE COMPONENTDIDMOUNT, WE LEAVE THE SECOND PARAMETER AS AN EMPTY ARRAY
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCountersState(state => ({ ...state, secondCounter: secondCounter + 1 }));
    // IF WE WANT OUR USEEFFECT TO BEHAVE LIKE COMPONENTDIDUPDATE, WE ADD AN ARRAY OF ALL THE STATE PIECES THAT AFFECT OUR LOGIC
  }, [counter]);

  return (
    // HERE ONLY(!!!!) SYNCHRONOUS STATE CHANGES
    <div>
      Hello {name} {surname}
      <div>{counter}</div>
      <div>{secondCounter}</div>
      <button onClick={() => logicCounter(10)}>Set COUNTER</button>
      <button onClick={() => this.setCounter()}>Set COUNTER</button>
    </div>
  );
};

export default HelloFunctionalComponents;
