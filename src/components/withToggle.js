import React, { useState } from 'react';

const withToggle = Component => props => {
  const [toggle, setToggle] = useState(false);

  return <Component {...props} toggle={toggle} setToggle={setToggle} />;
};

export default withToggle;
