import React, { Component } from 'react';

export class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.childChangeCounter}>Decrease counter</button>
        </div>
      </div>
    );
  }
}

export default DecreaseCounter;
