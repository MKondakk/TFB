import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} onEdit={onEdit} onDelete={onDelete}/>
      ))}
    </div>
  );
};
export default ProductList;

