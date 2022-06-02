import React, { Component } from 'react';

export class Cart extends Component {
  render() {
    return (
      <div>
        <div>{this.props.cartItems}</div>
      </div>
    );
  }
}

export default Cart;
