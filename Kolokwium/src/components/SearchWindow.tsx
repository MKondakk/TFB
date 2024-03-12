import React, { useContext, useMemo } from 'react';
import { AppContext } from '../App';
import {ProductList} from './ProductList';

const SearchWindow: React.FC = () => {
  const { searchTerm, setSearchTerm, products } = useContext(AppContext);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm ? (
        <React.Fragment>
          <h3>Filtered Products</h3>
          <ProductList products={filteredProducts} />
        </React.Fragment>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export { SearchWindow };
