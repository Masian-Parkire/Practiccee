import React from 'react';
import './InvoiceList.css';

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      <h3>Invoices</h3>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <p>Invoice Number: {invoice.invoiceNumber}</p>
            <p>Invoice Item: {invoice.invoiceItem}</p>
            <p>Creation Date: {invoice.creationDate}</p>
            <p>Due Date: {invoice.dueDate}</p>
            <p>Amount: {invoice.amount}</p>
            <p>Paid Amount: {invoice.paidAmount}</p>
            <p>Balance: {invoice.balance}</p>
            <p>Status: {invoice.completionStatus}</p>
            <p>Days Until Due: {invoice.daysUntilDue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
