import React from 'react';
import FancyTable from './FancyTable';

const FancyTablePage: React.FC<{ n: number }> = ({ n }) => {
  return (
    <div className="fancy_table_page">
      <h1>Fancy Table Page</h1>
      <FancyTable n={n} />
    </div>
  );
};

export default FancyTablePage;
