import React, { useContext } from 'react';
import { AppContext } from '../App';

interface EditButtonProps {
  productId: number;
}

const EditButton: React.FC<EditButtonProps> = ({ productId }) => {
  const { handleEdit } = useContext(AppContext);

  const handleEditClick = () => {
    handleEdit(productId);
  };

  return (
    <button onClick={handleEditClick}>
      Edit
    </button>
  );
};

export {EditButton};
