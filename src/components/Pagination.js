import React from 'react';

const Pagination = ({ totalResults, pages }) => {
  return (
    <div>
      <span>Found {totalResults} results</span>
      <ul>
        {pages.map(page => {
          return <li key={page}>{page + 1}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagination;
