import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createInvoice, updateInvoice } from '../../store/invoicesSlice';
import './InvoiceForm.css';

const InvoiceForm = ({ schoolId, existingInvoice }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(existingInvoice || {
    dueDate: '',
    amount: '',
    items: '',
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
    if (existingInvoice) {
      dispatch(updateInvoice({ schoolId, invoiceId: existingInvoice.id, data: formData }));
    } else {
      dispatch(createInvoice({ schoolId, data: formData }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="invoice-form">
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
      <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
      <input type="text" name="items" value={formData.items} onChange={handleChange} />
      <button type="submit">{existingInvoice ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default InvoiceForm;
