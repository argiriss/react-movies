import React, { Component } from 'react';

import Counter from './Counter';

import './App.css';

export class App extends Component {
  state = { name: 'stelios', surname: 'anastasiadis', counter: 1 };

  componentDidMount() {}

  increaseCounter = step => {
    this.setState({ counter: this.state.counter + step });
  };

  render() {
    return (
      <div>
        Hello {this.state.name} {this.state.surname}
        <div>
          <Counter cartTotals={this.state.counter} childChangeCounter={() => this.increaseCounter(1)} />
        </div>
      </div>
    );
  }
}

export default App;
