import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

const Pagination = ({ totalResults, pages, clickEvent, extraPayload }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {totalResults > 0 ? (
        <Fragment>
          <span>Found {totalResults} results</span>
          <ul>
            {pages.map(page => {
              return (
                <li onClick={() => dispatch(clickEvent({ page: page + 1, ...extraPayload }))} key={page}>
                  {page + 1}
                </li>
              );
            })}
          </ul>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Pagination;
