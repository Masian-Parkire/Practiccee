import { createSlice } from '@reduxjs/toolkit';

// Initial static data
const initialState = {
  schools: [
    {
      id: 1,
      name: 'School One',
      type: 'Primary',
      product: 'Zeraki Analytics',
      county: 'County One',
      registrationDate: '2022-01-01',
      contactInformation: '123456789',
      balance: 500,
    },
    {
      id: 2,
      name: 'School Two',
      type: 'Secondary',
      product: 'Zeraki Finance',
      county: 'County Two',
      registrationDate: '2021-05-12',
      contactInformation: '987654321',
      balance: 300,
    },
  ],
  invoices: {
    1: [
      {
        id: 1,
        invoiceNumber: 'INV001',
        invoiceItem: 'Item A',
        creationDate: '2022-01-10',
        dueDate: '2022-02-10',
        amount: 100,
        paidAmount: 50,
        balance: 50,
        completionStatus: 'Pending',
        daysUntilDue: 30,
      },
    ],
    2: [
      {
        id: 2,
        invoiceNumber: 'INV002',
        invoiceItem: 'Item B',
        creationDate: '2021-06-15',
        dueDate: '2021-07-15',
        amount: 200,
        paidAmount: 200,
        balance: 0,
        completionStatus: 'Completed',
        daysUntilDue: -10,
      },
    ],
  },
  collections: {
    1: [
      {
        id: 1,
        invoiceNumber: 'INV001',
        collectionNumber: 'COL001',
        date: '2022-01-15',
        amount: 50,
        status: 'Valid',
      },
    ],
    2: [
      {
        id: 2,
        invoiceNumber: 'INV002',
        collectionNumber: 'COL002',
        date: '2021-06-20',
        amount: 200,
        status: 'Valid',
      },
    ],
  },
  status: null,
};

const schoolManagementSlice = createSlice({
  name: 'schoolManagement',
  initialState,
  reducers: {},
});

export default schoolManagementSlice.reducer;
