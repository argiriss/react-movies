import React, { Component } from 'react';

import Counter from './Counter';
import DecreaseCounter from './DecreaseCounter';

import './App.css';

export class App extends Component {
  state = {
    name: 'stelios',
    surname: 'anastasiadis',
    counter: 1,
    secondCounter: 0,
    users: [],
  };

  componentDidMount() {
    this.setState({
      users: [...this.state.users, { id: 1, name: 'Argiris', age: 35 }, { id: 2, name: 'Vaios', age: 25 }],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      this.setState({
        secondCounter: this.state.secondCounter + 1,
      });
    }
  }

  increaseCounter = step => {
    this.setState({ counter: this.state.counter + step });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  showListUsers = () => {
    const listUsers = this.state.users
      .filter(x => {
        return x.age > 25;
      })
      .map((x, index) => {
        return <li key={`${x.name}_${index}`}>{x.name}</li>;
      });

    return listUsers;
  };

  render() {
    return (
      <div>
        Hello {this.props.name} {this.props.surname}
        <div>
          <div>Counter: {this.state.counter}</div>
          <div>Second counter: {this.state.secondCounter}</div>
          <Counter cartTotals={this.state.counter} childChangeCounter={() => this.increaseCounter(1)} />
          <DecreaseCounter childChangeCounter={this.decreaseCounter} />
          <ul>{this.showListUsers()}</ul>
        </div>
      </div>
    );
  }
}

export default App;
