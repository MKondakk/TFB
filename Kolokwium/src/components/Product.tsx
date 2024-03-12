import React from 'react';
import {EditButton} from './EditButton';
import {DeleteButton} from './DeleteButton';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, description }) => {

  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <EditButton productId={id}  />
      <DeleteButton productId={id}  />
    </li>
  );
};

export {Product};
