import React, { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export class FilterableProductTable extends Component {
  state = {
    items: [
      { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
      { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
      { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
      { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
      { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
    ],
    categories: [],
    filteredItems: [],
  };

  componentDidMount() {
    this.setState({
      categories: [...this.state.categories, [...new Set(this.state.items.map(item => item.category))]].flat(),
      filteredItems: this.state.items,
    });
  }

  searchText = value => {
    this.setState({ filteredItems: this.state.items.filter(item => item.name.includes(value)) });
  };

  render() {
    return (
      <div>
        <SearchBar searchText={this.searchText} />
        <ProductTable categories={this.state.categories} items={this.state.filteredItems} />
      </div>
    );
  }
}

export default FilterableProductTable;
