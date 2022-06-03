import React, { Component } from 'react';

import './App.css';
// import Cart from './Cart';
// import Dialog from './Dialog';
// import MiniCart from './MiniCart';
import NameForm from './NameForm';
import NewApp from './NewApp';
import FilterableProductTable from './thinkinginreact/FilterableProductTable';

export class App extends Component {
  // state = {
  //   cartItems: 1,
  // };

  // increaseCartItems = () => {
  //   this.setState({ cartItems: this.state.cartItems + 1 });
  // };

  render() {
    return (
      <>
        <NewApp />
        {/* THIS IS ONLY FOR TEACHING */}
        {/* <Cart cartItems={this.state.cartItems} increaseCartItems={this.increaseCartItems} />
        <MiniCart cartItems={this.state.cartItems} />
        <Dialog />
        <Dialog>
          <button>Cancel</button>
          <button>Continue</button>
        </Dialog>
        <Dialog>
          <button></button>
        </Dialog> */}
        <FilterableProductTable />
        <NameForm />
      </>
    );
  }
}

export default App;
