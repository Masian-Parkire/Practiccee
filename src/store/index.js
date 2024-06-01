import { configureStore } from '@reduxjs/toolkit';
import schoolManagementReducer from './schoolManagementSlice';

const store = configureStore({
  reducer: {
    schoolManagement: schoolManagementReducer,
  },
});

export default store;
