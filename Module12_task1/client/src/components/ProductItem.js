import React from 'react';

const ProductItem = ({ product, onEdit, onDelete  }) => {

  const handleEditClick = () => {
    onEdit(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  const handleDeleteClick = () => {
    onDelete(product._id);
    };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p className="price">Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Unit: {product.unit}</p>
      <button className='edit_button' onClick={handleEditClick}>Edytuj</button>
      <button onClick={handleDeleteClick}>Usuń</button>
    </div>
  );
};
export default ProductItem;
