import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');
  const [sortByValue, setSortByValue] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ filter: filterValue, sortBy: sortByValue });
  };

  return (
    <div className="filter-container">
        <div className="filter-item">
            <label>Nazwa produktu: </label>
            <input
                type="text"
                id="filter"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            />
        </div>

        <div className="filter-item">
            <label>Sortuj według: </label>
            <select
                id="sortBy"
                value={sortByValue}
                onChange={(e) => setSortByValue(e.target.value)}
            >
                <option value="">None</option>
                <option value="name">Nazwa</option>
                <option value="price">Cena</option>
                <option value="quantity">Ilość</option>
            </select>
        </div>

        <div className="filter-item">
            <button onClick={handleFilterChange}>Filtruj</button>
        </div>
    </div>
  );
};

export default Filter;
