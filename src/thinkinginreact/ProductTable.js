import React, { Component } from 'react';

import ItemsPerCategory from './ItemsPerCategory';

export class ProductTable extends Component {
  render() {
    const { categories, items } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => {
            return <ItemsPerCategory title={category} key={category} items={items} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
