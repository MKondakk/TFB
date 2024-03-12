import React from 'react';

const FancyTable = ({ n }) => {
  const listItems = Array.from({ length: n }, (_, index) => (
    <li key={index + 1}>{index + 1}</li>
  ));

  return <ul>{listItems}</ul>;
};

export default FancyTable;
