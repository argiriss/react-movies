import React, { Component } from 'react';

export class Cart extends Component {
  render() {
    return (
      <div>
        <div>{this.props.cartItems}</div>
        <button onClick={this.props.increaseCartItems}>Add item</button>
      </div>
    );
  }
}

export default Cart;
