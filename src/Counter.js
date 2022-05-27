import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.cartTotals % 2 === 0 && <span>{this.props.cartTotals}</span>}
        <div>
          <button onClick={this.props.childChangeCounter}>Increase counter</button>
        </div>
      </div>
    );
  }
}

export default Counter;
