import React, { useState } from 'react';

const EditForm = ({ product, onSubmit, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedProduct);
  };

  return (
    <div className="form-item"> 
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />

      <label>Price: </label>
      <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />

      <label>Description: </label>
        <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />

      <label>Quantity: </label>
        <input type="number" name="quantity" value={editedProduct.quantity} onChange={handleChange} />

      <label>Unit: </label>
        <input type="text" name="unit" value={editedProduct.unit} onChange={handleChange}/>


      <button type="submit">Zapisz</button>
      <button type="button" onClick={onCancel}>Anuluj</button>
    </form>
    </div>
  );
};

export default EditForm;
