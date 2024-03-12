import React from 'react';
import {Product} from './Product';

const ProductList: React.FC<{ products: { id: number; name: string; price: number; description: string }[] }> = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export {ProductList};
