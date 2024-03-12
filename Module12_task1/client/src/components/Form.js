import React, { useState } from 'react';


  const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, price, description, quantity, unit };
    onSubmit(formData);
  };

  return (
    <div className="form-item"> 
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Price: </label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Description: </label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Quantity: </label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

        <label>Unit: </label>
        <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />

        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default Form;
