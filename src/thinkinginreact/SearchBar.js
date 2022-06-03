import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="search" onChange={e => this.props.searchText(e.target.value)} placeholder="Search items..." />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.func,
};

export default SearchBar;
