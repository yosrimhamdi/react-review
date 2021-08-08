import React from 'react';

import User from './User';
import Test from './Test';

const App = () => {
  const onFormSubmit = user => {
    console.log(user);
  };

  return (
    <div>
      <User onFormSubmit={onFormSubmit} />
      <Test />
    </div>
  );
};

export default App;
