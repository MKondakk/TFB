import React from 'react';

const Multiple = ({ name, number }) => (
  <>
    <h2>{name}</h2>
    <ul>
      {Array.from({ length: number }, (_, index) => (
        <li key={index + 1}>{index + 1}</li>
      ))}
    </ul>
  </>
);

export default Multiple;
