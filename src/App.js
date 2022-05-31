import React, { Component } from 'react';

import Counter from './Counter';
import DecreaseCounter from './DecreaseCounter';

import './App.css';

export class App extends Component {
  state = { name: 'stelios', surname: 'anastasiadis', counter: 1 };

  componentDidMount() {}

  increaseCounter = step => {
    this.setState({ counter: this.state.counter + step });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        Hello {this.props.name} {this.props.surname}
        <div>
          <span>{this.state.counter}</span>
          <Counter cartTotals={this.state.counter} childChangeCounter={() => this.increaseCounter(1)} />
          <DecreaseCounter childChangeCounter={this.decreaseCounter} />
        </div>
      </div>
    );
  }
}

export default App;
