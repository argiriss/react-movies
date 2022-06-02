import React, { Component } from 'react';

export class Dialog extends Component {
  render() {
    return (
      <>
        <div>This is a dialog</div>
        <button>x</button>
        {this.props.children}
      </>
    );
  }
}

export default Dialog;
