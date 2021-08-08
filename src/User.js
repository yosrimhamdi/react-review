import React, { useState } from 'react';

const User = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" term={term} onChange={e => setTerm(e.target.value)} />
    </form>
  );
};

export default User;
