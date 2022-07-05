import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div>
      <div>This is a wrapper</div>
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
