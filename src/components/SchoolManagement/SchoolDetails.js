import React from 'react';
import { useParams } from 'react-router-dom';
import './SchoolDetails.css';

const SchoolDetails = () => {
  const { schoolId } = useParams();

  // Placeholder data for demonstration
  const school = {
    id: schoolId,
    name: `School ${schoolId}`,
    type: 'Primary',
    product: 'ABC Product',
    county: 'County Name',
    registrationDate: '2024-06-01',
    contactInformation: 'Contact Info',
    balance: '$1000',
    // Add more details as needed
  };

  // Placeholder data for invoices and collections
  const invoices = [
    { id: 1, invoiceNumber: 'INV-001', amount: '$500', status: 'Paid' },
    { id: 2, invoiceNumber: 'INV-002', amount: '$700', status: 'Pending' },
    // Add more invoice data as needed
  ];

  const collections = [
    { id: 1, collectionNumber: 'COL-001', amount: '$300', status: 'Valid' },
    { id: 2, collectionNumber: 'COL-002', amount: '$200', status: 'Bounced' },
    // Add more collection data as needed
  ];

  return (
    <div className="school-details">
      <h1>{school.name}</h1>
      <p>Type: {school.type}</p>
      <p>Product: {school.product}</p>
      <p>County: {school.county}</p>
      <p>Registration Date: {school.registrationDate}</p>
      <p>Contact Information: {school.contactInformation}</p>
      <p>Balance: {school.balance}</p>

      <h2>Invoices</h2>
      <div className="invoice-list">
        {invoices.map(invoice => (
          <div key={invoice.id} className="invoice-item">
            <p>Invoice Number: {invoice.invoiceNumber}</p>
            <p>Amount: {invoice.amount}</p>
            <p>Status: {invoice.status}</p>
          </div>
        ))}
      </div>

      <h2>Collections</h2>
      <div className="collection-list">
        {collections.map(collection => (
          <div key={collection.id} className="collection-item">
            <p>Collection Number: {collection.collectionNumber}</p>
            <p>Amount: {collection.amount}</p>
            <p>Status: {collection.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolDetails;
