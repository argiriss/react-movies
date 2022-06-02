import React, { Component, Fragment } from 'react';

import './Item.css';

export class ItemsPerCategory extends Component {
  render() {
    const filteredItemsPerCategory = this.props.items.filter(item => item.category === this.props.title);

    return (
      <>
        <tr>
          <td colSpan="2">{this.props.title}</td>
        </tr>

        {filteredItemsPerCategory.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <span className={`${!item.stocked ? 'itemName' : ''}`}>{item.name}</span>
              </td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default ItemsPerCategory;
