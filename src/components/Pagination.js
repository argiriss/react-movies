import React, { Fragment } from 'react';

const Pagination = ({ totalResults, pages }) => {
  return (
    <div>
      {totalResults > 0 ? (
        <Fragment>
          <span>Found {totalResults} results</span>
          <ul>
            {pages.map(page => {
              return <li key={page}>{page + 1}</li>;
            })}
          </ul>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Pagination;
