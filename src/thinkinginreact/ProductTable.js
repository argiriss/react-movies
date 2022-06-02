import React, { Component } from 'react';

import ItemsPerCategory from './ItemsPerCategory';

export class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.categories.map(category => {
            return <ItemsPerCategory title={category} key={category} items={this.props.items} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
