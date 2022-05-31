import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.childChangeCounter}>Increase counter</button>
        </div>
      </div>
    );
  }
}

export default Counter;
