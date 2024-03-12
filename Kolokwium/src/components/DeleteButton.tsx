import React, { useContext } from 'react';
import { AppContext } from '../App';

interface DeleteButtonProps {
  productId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId }) => {
  const { handleDelete } = useContext(AppContext);

  const handleDeleteClick = () => {
    handleDelete(productId);
  };

  return (
    <button onClick={handleDeleteClick}>
      Delete
    </button>
  );
};

export {DeleteButton};
