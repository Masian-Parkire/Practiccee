import React from 'react';
import './CollectionList.css';

const CollectionList = ({ collections }) => {
  return (
    <div>
      <h3>Collections</h3>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            <p>Invoice Number: {collection.invoiceNumber}</p>
            <p>Collection Number: {collection.collectionNumber}</p>
            <p>Date: {collection.date}</p>
            <p>Amount: {collection.amount}</p>
            <p>Status: {collection.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;
