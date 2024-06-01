import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCollection } from '../../store/collectionsSlice';
import './CollectionForm.css';

const CollectionForm = ({ schoolId, invoiceId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCollection({ schoolId, invoiceId, data: formData }));
  };

  return (
    <form onSubmit={handleSubmit} className="collection-form">
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Collection</button>
    </form>
  );
};

export default CollectionForm;
